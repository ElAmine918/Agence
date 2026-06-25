"use client";

import * as THREE from 'three'
import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion'

const PointCloudMaterial = {
  uniforms: {
    uMouse: { value: new THREE.Vector3(0, 0, 0) },
    uTime: { value: 0 },
    uRadius: { value: 2.5 }, 
    uStrength: { value: 1.5 },
    uMorphProgress: { value: 0.0 }, // 0.0 = stars, 1.0 = car
    uColor: { value: new THREE.Color("#ffffff") }
  },
  vertexShader: `
    uniform vec3 uMouse;
    uniform float uTime;
    uniform float uRadius;
    uniform float uStrength;
    uniform float uMorphProgress;
    
    attribute vec3 aTargetPos;
    varying float vAlpha;
    
    void main() {
      // Easing function for a smooth morph (Cubic Ease Out)
      float ease = 1.0 - pow(1.0 - uMorphProgress, 3.0);
      
      // Interpolate between random star position and target car position
      vec3 basePos = mix(position, aTargetPos, ease);
      
      // Calculate world position to compare with mouse
      vec4 worldPos = modelMatrix * vec4(basePos, 1.0);
      
      // Distance to mouse in world space
      float dist = distance(worldPos.xyz, uMouse);
      
      // Repulsion force (Void effect)
      if(dist < uRadius) {
        vec3 dir = normalize(worldPos.xyz - uMouse);
        float force = (1.0 - (dist / uRadius)) * uStrength;
        // Push the point outward
        worldPos.xyz += dir * force;
      }
      
      // Subtle idle breathing animation
      worldPos.y += sin(uTime * 2.0 + worldPos.x * 5.0) * 0.02;
      
      vec4 mvPosition = viewMatrix * worldPos;
      gl_Position = projectionMatrix * mvPosition;
      
      // Size attenuation
      gl_PointSize = (15.0 / -mvPosition.z);
      
      vAlpha = 1.0;
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    varying float vAlpha;
    
    void main() {
      // Create a soft glowing circle (Gaussian-like)
      float dist = distance(gl_PointCoord, vec2(0.5));
      if (dist > 0.5) discard;
      
      // Soft edge formula for luminescence
      float alpha = pow(1.0 - (dist * 2.0), 1.5) * vAlpha;
      
      gl_FragColor = vec4(uColor, alpha * 0.5);
    }
  `
}

function PointCloudShape() {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const groupRef = useRef<THREE.Group>(null)
  const { camera } = useThree()
  
  const mouse = useRef(new THREE.Vector2(-100, -100))
  const mouse3D = useMemo(() => new THREE.Vector3(), [])
  const morphProgress = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Load the newly provided Ferrari model
  const { scene } = useGLTF('/ferrari2004.glb')
  
  // Extract all vertices from all meshes
  const mergedGeometry = useMemo(() => {
    const randomPoints: number[] = []
    const targetPoints: number[] = []
    
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        const positions = mesh.geometry.attributes.position.array
        
        mesh.updateMatrixWorld()
        const matrix = mesh.matrixWorld
        
        const vec = new THREE.Vector3()
        for (let i = 0; i < positions.length; i += 6) {
          // Target position (Car)
          vec.set(positions[i], positions[i+1], positions[i+2])
          vec.applyMatrix4(matrix)
          targetPoints.push(vec.x, vec.y, vec.z)
          
          // Random initial position (Stars) - spherical distribution
          const theta = Math.random() * Math.PI * 2
          const phi = Math.acos(Math.random() * 2 - 1)
          const r = Math.random() * 40 + 5 // Radius spread between 5 and 45
          randomPoints.push(
            r * Math.sin(phi) * Math.cos(theta),
            r * Math.sin(phi) * Math.sin(theta),
            r * Math.cos(phi)
          )
        }
      }
    })
    
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(randomPoints, 3))
    geo.setAttribute('aTargetPos', new THREE.Float32BufferAttribute(targetPoints, 3))
    return geo
  }, [scene])

  useFrame((state, delta) => {
    if (!materialRef.current) return

    // 1. Unproject global mouse coordinates to world space
    mouse3D.set(mouse.current.x, mouse.current.y, 0.5)
    mouse3D.unproject(camera)
    mouse3D.sub(camera.position).normalize()
    const distanceToZero = -camera.position.z / mouse3D.z
    mouse3D.copy(camera.position).add(mouse3D.multiplyScalar(distanceToZero))
    
    // Update shader uniforms
    materialRef.current.uniforms.uMouse.value.copy(mouse3D)
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    
    // Animate morph progress from 0 to 1
    if (state.clock.elapsedTime > 1.0 && morphProgress.current < 1.0) {
      morphProgress.current = Math.min(1.0, morphProgress.current + delta * 0.25)
      materialRef.current.uniforms.uMorphProgress.value = morphProgress.current
    }
    
    // 2. Slow rotation of the shape (levitation)
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15
      // Slight vertical floating
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime) * 0.002
    }
  })

  // 3. Scroll Parallax Effect
  useEffect(() => {
    const handleScroll = () => {
      if (groupRef.current) {
        // Move down as we scroll down
        groupRef.current.position.y = -(window.scrollY * 0.015)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    // Increased scale from [0.8] to [2, 2, 2] to make the car much bigger
    <group ref={groupRef} scale={[2.0, 2.0, 2.0]} position={[0, -0.5, 0]} rotation={[0.2, -0.5, 0]}>
      <points geometry={mergedGeometry}>
        <shaderMaterial
          ref={materialRef}
          attach="material"
          vertexShader={PointCloudMaterial.vertexShader}
          fragmentShader={PointCloudMaterial.fragmentShader}
          uniforms={THREE.UniformsUtils.clone(PointCloudMaterial.uniforms)}
          transparent={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

useGLTF.preload('/ferrari2004.glb')

export default function CarPointCloud() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      // 'fixed' makes it scroll with the page, staying in background
      className="fixed inset-0 z-0 pointer-events-none"
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <PointCloudShape />
      </Canvas>
    </motion.div>
  )
}
