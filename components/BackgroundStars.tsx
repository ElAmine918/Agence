"use client";

import { useEffect, useRef, useCallback } from "react";

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<{ x: number; y: number; size: number; speed: number; opacity: number }[]>([]);
  const animationIdRef = useRef<number>(0);
  const isVisibleRef = useRef(true);

  const initStars = useCallback((width: number, height: number) => {
    const count = Math.min(Math.floor((width * height) / 10000), 150); // Cap at 150 stars
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }
    starsRef.current = stars;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Observe visibility so canvas pauses when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          animate();
        }
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      initStars(w, h);
    };

    const drawDiagonalLines = (w: number, h: number) => {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 1;
      const spacing = 80;
      const diagonal = Math.sqrt(w * w + h * h);

      ctx.beginPath();
      for (let i = -diagonal; i < diagonal * 2; i += spacing) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i + h, h);
      }
      ctx.stroke();
    };

    const animate = () => {
      if (!isVisibleRef.current) return;

      const w = canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
      const h = canvas.height / (Math.min(window.devicePixelRatio || 1, 2));
      ctx.clearRect(0, 0, w, h);

      drawDiagonalLines(w, h);

      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.fill();

        star.y -= star.speed;
        star.opacity += (Math.random() - 0.5) * 0.02;
        if (star.opacity < 0.1) star.opacity = 0.1;
        if (star.opacity > 0.8) star.opacity = 0.8;

        if (star.y < -10) {
          star.y = h + 10;
          star.x = Math.random() * w;
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();

    // Debounced resize handler
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [initStars]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001033] via-[#0040c8] via-[70%] to-[#8ecdf5]" />

      {/* Canvas for stars and diagonal lines */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Soft edge at the bottom for transition into light sections */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[var(--background)]" />
    </div>
  );
}
