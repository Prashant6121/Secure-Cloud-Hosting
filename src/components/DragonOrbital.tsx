import React, { useEffect, useRef } from 'react';

const DragonOrbital: React.FC = () => {
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

    // Star properties
    const stars: Array<{x: number; y: number; size: number; opacity: number}> = [];
    const numStars = 200;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        opacity: Math.random()
      });
    }

    // Dragon spacecraft properties
    let dragonAngle = 0;
    const orbitRadius = Math.min(canvas.width, canvas.height) * 0.3;
    const dragonSize = 20;

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars with twinkling effect
      stars.forEach(star => {
        star.opacity = Math.sin(Date.now() * 0.001 + star.x) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Earth
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const earthRadius = orbitRadius * 0.6;

      // Earth glow
      const earthGlow = ctx.createRadialGradient(
        centerX, centerY, earthRadius * 0.9,
        centerX, centerY, earthRadius * 1.2
      );
      earthGlow.addColorStop(0, 'rgba(64, 128, 255, 0.2)');
      earthGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = earthGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, earthRadius * 1.2, 0, Math.PI * 2);
      ctx.fill();

      // Earth body
      const earthGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, earthRadius
      );
      earthGradient.addColorStop(0, '#4B7BE5');
      earthGradient.addColorStop(0.5, '#23B5D3');
      earthGradient.addColorStop(1, '#071E22');
      ctx.fillStyle = earthGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, earthRadius, 0, Math.PI * 2);
      ctx.fill();

      // Draw orbit path
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbitRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Calculate Dragon position
      const dragonX = centerX + Math.cos(dragonAngle) * orbitRadius;
      const dragonY = centerY + Math.sin(dragonAngle) * orbitRadius;

      // Draw Dragon
      ctx.save();
      ctx.translate(dragonX, dragonY);
      ctx.rotate(dragonAngle + Math.PI / 2);

      // Dragon body
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.moveTo(-dragonSize/2, -dragonSize);
      ctx.lineTo(dragonSize/2, -dragonSize);
      ctx.lineTo(dragonSize/2, dragonSize);
      ctx.lineTo(-dragonSize/2, dragonSize);
      ctx.closePath();
      ctx.fill();

      // Solar panels
      ctx.fillStyle = '#1E90FF';
      ctx.fillRect(-dragonSize * 1.5, -dragonSize/4, dragonSize/2, dragonSize/2);
      ctx.fillRect(dragonSize, -dragonSize/4, dragonSize/2, dragonSize/2);

      // Thruster effect
      if (Math.random() > 0.5) {
        const thrusterGlow = ctx.createRadialGradient(
          0, dragonSize,
          0,
          0, dragonSize,
          dragonSize/2
        );
        thrusterGlow.addColorStop(0, 'rgba(255, 100, 50, 0.8)');
        thrusterGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = thrusterGlow;
        ctx.beginPath();
        ctx.arc(0, dragonSize, dragonSize/2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      // Update Dragon position
      dragonAngle += 0.002;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
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

export default DragonOrbital;