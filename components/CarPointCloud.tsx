"use client";

import * as THREE from 'three'
import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { motion } from 'framer-motion'

const PointCloudMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uRadius: { value: 3.5 },
    uStrength: { value: 2.0 },
    uScrollMorph: { value: 1.0 }, // 1.0 = Sphere, 0.0 = Stars
    uColor: { value: new THREE.Color("#ffffff") }
  },
  vertexShader: `
    uniform float uTime;
    uniform float uRadius;
    uniform float uStrength;
    uniform float uScrollMorph;
    
    attribute vec3 aTargetPos;
    attribute float aIsShootingStar;
    attribute float aShootingStarOffset;
    
    varying float vAlpha;
    varying float vIsShootingStar;
    
    // Pseudo-random function for dispersion
    float hash(vec3 p) {
      return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
    }
    
    void main() {
      // Morph between random stars (position) and perfect sphere (aTargetPos)
      // Easing to make the morph smoother
      float easeMorph = uScrollMorph * uScrollMorph * (3.0 - 2.0 * uScrollMorph);
      vec3 basePos = mix(position, aTargetPos, easeMorph);
      
      float starAlpha = 1.0;
      vIsShootingStar = aIsShootingStar;
      
      // Shooting star logic: only active when we are mostly in Starry Night mode
      if (aIsShootingStar > 0.5 && uScrollMorph < 0.2) {
         // Fast animation loop
         float t = fract(uTime * 0.3 + aShootingStarOffset); 
         basePos.x += (t * 80.0) - 40.0; // Fly across
         basePos.y -= (t * 40.0) - 20.0; // Fly downwards
         basePos.z += (t * 20.0) - 10.0;
         
         // Fade in and out at the edges of its life
         starAlpha = sin(t * 3.14159);
      }
      
      // Calculate world position
      vec4 worldPos = modelMatrix * vec4(basePos, 1.0);
      
      // Subtle idle breathing animation only when in sphere mode
      worldPos.y += sin(uTime * 2.0 + worldPos.x * 5.0) * 0.05 * uScrollMorph;
      worldPos.x += cos(uTime * 1.5 + worldPos.y * 3.0) * 0.05 * uScrollMorph;
      
      vec4 mvPosition = viewMatrix * worldPos;
      gl_Position = projectionMatrix * mvPosition;
      
      // Size attenuation
      // If it's a shooting star, make it slightly larger
      float baseSize = aIsShootingStar > 0.5 && uScrollMorph < 0.2 ? 35.0 : 16.0;
      gl_PointSize = (baseSize / -mvPosition.z);
      
      vAlpha = starAlpha;
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    varying float vAlpha;
    varying float vIsShootingStar;
    
    void main() {
      // Create a soft glowing circle (Gaussian-like)
      float dist = distance(gl_PointCoord, vec2(0.5));
      if (dist > 0.5) discard;
      
      // Soft edge formula for luminescence (less aggressive falloff for more solid points)
      float alpha = pow(1.0 - (dist * 2.0), 0.8) * vAlpha;
      
      // Shooting stars are brighter, base points are more visible/less transparent
      float finalAlpha = vIsShootingStar > 0.5 ? alpha * 1.8 : alpha * 1.5;
      
      gl_FragColor = vec4(uColor, finalAlpha);
    }
  `
}

function PointCloudShape() {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const groupRef = useRef<THREE.Group>(null)
  const { camera } = useThree()

  const morphProgress = useRef(1.0)
  
  // Track scroll for morphing
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const mergedGeometry = useMemo(() => {
    const randomPoints: number[] = []
    const targetPoints: number[] = []
    const isShootingStar: number[] = []
    const shootingStarOffset: number[] = []
    
    const count = 8664; // 6 faces * 38 * 38
    
    for (let i = 0; i < count; i++) {
      // 1. Target Position (Perfect Uniform Grid Cube)
      const pointsPerFace = 1444; // 38 * 38
      const face = Math.floor(i / pointsPerFace) % 6;
      const indexOnFace = i % pointsPerFace;
      const row = Math.floor(indexOnFace / 38);
      const col = indexOnFace % 38;
      
      // Map to -2.5 to 2.5
      const u = (row / 37) * 5.0 - 2.5;
      const v = (col / 37) * 5.0 - 2.5;
      const d = 2.5; // Half-size

      let cx = 0, cy = 0, cz = 0
      if (face === 0) { cx = d; cy = u; cz = v }
      else if (face === 1) { cx = -d; cy = u; cz = v }
      else if (face === 2) { cx = u; cy = d; cz = v }
      else if (face === 3) { cx = u; cy = -d; cz = v }
      else if (face === 4) { cx = u; cy = v; cz = d }
      else if (face === 5) { cx = u; cy = v; cz = -d }
      
      targetPoints.push(cx, cy, cz)

      // 2. Random Position (Starry Night across the entire background)
      randomPoints.push(
        (Math.random() - 0.5) * 60, // Wide X spread
        (Math.random() - 0.5) * 60, // Wide Y spread
        (Math.random() - 0.5) * 40 - 10 // Pushed back in Z so it feels like a deep night sky
      )
      
      // 3. Shooting star attributes
      // 0.5% chance to be a shooting star
      const isShooting = Math.random() < 0.005 ? 1.0 : 0.0;
      isShootingStar.push(isShooting);
      shootingStarOffset.push(Math.random() * 100);
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(randomPoints, 3))
    geo.setAttribute('aTargetPos', new THREE.Float32BufferAttribute(targetPoints, 3))
    geo.setAttribute('aIsShootingStar', new THREE.Float32BufferAttribute(isShootingStar, 1))
    geo.setAttribute('aShootingStarOffset', new THREE.Float32BufferAttribute(shootingStarOffset, 1))
    return geo
  }, [])

  useFrame((state, delta) => {
    if (!materialRef.current) return

    // Update shader uniforms
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime

    // Morph Logic: Top of page (scrollY=0) = Sphere (1.0). Scroll down = Stars (0.0).
    // Morph completes within the first 600px of scroll
    const targetMorph = Math.max(0, 1 - scrollY / 600)
    // Lerp for smooth transition
    morphProgress.current = THREE.MathUtils.lerp(morphProgress.current, targetMorph, 0.05)
    materialRef.current.uniforms.uScrollMorph.value = morphProgress.current

    // 2. Slow rotation of the shape
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1
      groupRef.current.rotation.x += delta * 0.05
      
      // Gentle Parallax: move the whole group up slightly as we scroll down
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        -(scrollY * 0.015),
        0.1
      )
    }
  })

  return (
    // Placed in the background
    <group ref={groupRef} position={[0, 0, -4]}>
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
      className="fixed inset-0 z-0 pointer-events-none"
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 1.5]}>
        <PointCloudShape />
      </Canvas>
    </motion.div>
  )
}
