import React, { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  z: number;
  speed: number;
  size: number;
};

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let width = 0;
    let height = 0;
    const stars: Star[] = [];
    const starCount = 120;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * window.devicePixelRatio);
      canvas.height = Math.floor(height * window.devicePixelRatio);
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const createStar = (): Star => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 1 + 0.2,
      speed: Math.random() * 0.6 + 0.2,
      size: Math.random() * 1.6 + 0.6,
    });

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i += 1) {
        stars.push(createStar());
      }
    };

    const render = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = 'rgba(255, 255, 255, 0.7)';

      for (const star of stars) {
        star.y += star.speed * star.z;
        if (star.y > height + 10) {
          star.x = Math.random() * width;
          star.y = -10;
          star.z = Math.random() * 1 + 0.2;
          star.speed = Math.random() * 0.6 + 0.2;
          star.size = Math.random() * 1.6 + 0.6;
        }

        context.globalAlpha = 0.4 + star.z * 0.6;
        context.beginPath();
        context.arc(star.x, star.y, star.size * star.z, 0, Math.PI * 2);
        context.fill();
      }

      animationRef.current = window.requestAnimationFrame(render);
    };

    resize();
    initStars();
    animationRef.current = window.requestAnimationFrame(render);

    window.addEventListener('resize', resize);
    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" />;
};

export default Starfield;
