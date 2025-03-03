import React, { useEffect, useRef } from 'react';

const DragonAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Animation properties
    let rotation = 0;
    const earthRadius = Math.min(canvas.width, canvas.height) * 0.4;
    const orbitRadius = earthRadius * 1.3;
    const dragonSize = earthRadius * 0.1;

    // Star properties
    const stars: Array<{x: number; y: number; size: number}> = [];
    const numStars = 200;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2
      });
    }

    // Draw Earth
    const drawEarth = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, earthRadius
      );
      gradient.addColorStop(0, '#4B7BE5');  // Blue center
      gradient.addColorStop(0.5, '#23B5D3'); // Lighter blue
      gradient.addColorStop(1, '#071E22');   // Dark edge

      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, earthRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Add atmosphere glow
      const atmosphereGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, earthRadius,
        canvas.width / 2, canvas.height / 2, earthRadius * 1.1
      );
      atmosphereGradient.addColorStop(0, 'rgba(135, 206, 235, 0.3)');
      atmosphereGradient.addColorStop(1, 'rgba(135, 206, 235, 0)');

      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, earthRadius * 1.1, 0, Math.PI * 2);
      ctx.fillStyle = atmosphereGradient;
      ctx.fill();
    };

    // Draw Dragon spacecraft
    const drawDragon = (x: number, y: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Main capsule body
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.moveTo(-dragonSize, -dragonSize * 0.5);
      ctx.lineTo(dragonSize, -dragonSize * 0.5);
      ctx.lineTo(dragonSize * 1.2, 0);
      ctx.lineTo(dragonSize, dragonSize * 0.5);
      ctx.lineTo(-dragonSize, dragonSize * 0.5);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#333333';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Solar panels
      ctx.fillStyle = '#1E90FF';
      ctx.fillRect(-dragonSize * 1.5, -dragonSize * 0.1, dragonSize * 0.4, dragonSize * 0.2);
      ctx.fillRect(dragonSize * 1.1, -dragonSize * 0.1, dragonSize * 0.4, dragonSize * 0.2);

      // Windows
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(0, 0, dragonSize * 0.15, 0, Math.PI * 2);
      ctx.fill();

      // Thrusters
      ctx.fillStyle = '#FF4500';
      if (Math.random() > 0.5) { // Thruster animation
        ctx.beginPath();
        ctx.moveTo(-dragonSize, dragonSize * 0.5);
        ctx.lineTo(-dragonSize - dragonSize * 0.3, dragonSize * 0.7);
        ctx.lineTo(-dragonSize, dragonSize * 0.9);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Earth
      drawEarth();

      // Calculate Dragon position
      const dragonX = canvas.width / 2 + Math.cos(rotation) * orbitRadius;
      const dragonY = canvas.height / 2 + Math.sin(rotation) * orbitRadius;

      // Draw orbit path
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, orbitRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw Dragon
      drawDragon(dragonX, dragonY, rotation + Math.PI / 2);

      // Update rotation
      rotation += 0.005;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'linear-gradient(to bottom, #000000, #0a0a2a)' }}
    />
  );
};

export default DragonAnimation;