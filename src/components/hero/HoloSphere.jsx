import React, { useEffect, useRef } from 'react';

export default function HoloSphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 500;
      height = canvas.height = canvas.parentElement.clientHeight || 500;
    };
    window.addEventListener('resize', handleResize);

    // 3D Point Sphere Configuration
    const POINT_COUNT = 140;
    const SPHERE_RADIUS = Math.min(width, height) * 0.36;
    const points = [];

    for (let i = 0; i < POINT_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / POINT_COUNT);
      const theta = Math.sqrt(POINT_COUNT * Math.PI) * phi;

      points.push({
        x: SPHERE_RADIUS * Math.cos(theta) * Math.sin(phi),
        y: SPHERE_RADIUS * Math.sin(theta) * Math.sin(phi),
        z: SPHERE_RADIUS * Math.cos(phi),
        baseX: SPHERE_RADIUS * Math.cos(theta) * Math.sin(phi),
        baseY: SPHERE_RADIUS * Math.sin(theta) * Math.sin(phi),
        baseZ: SPHERE_RADIUS * Math.cos(phi),
        pulse: Math.random() * Math.PI,
      });
    }

    // Orbital Rings
    const rings = [
      { radius: SPHERE_RADIUS * 1.25, tiltX: 0.8, tiltY: 0.2, speed: 0.012, color: '#00f5d4' },
      { radius: SPHERE_RADIUS * 1.45, tiltX: -0.6, tiltY: 0.7, speed: -0.009, color: '#a855f7' },
      { radius: SPHERE_RADIUS * 1.6, tiltX: 0.3, tiltY: -0.9, speed: 0.007, color: '#38bdf8' },
    ];

    let rotX = 0;
    let rotY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const ny = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      targetRotY = nx * 0.45;
      targetRotX = -ny * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Smooth mouse tilt interpolation
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      const currentRotY = rotY + time * 0.35;
      const currentRotX = rotX + Math.sin(time * 0.5) * 0.15;

      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);
      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);

      // Central Pulsating AI Core
      const corePulse = Math.sin(time * 2.5) * 6 + 28;
      const coreGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, corePulse * 2.5);
      coreGrad.addColorStop(0, 'rgba(0, 245, 212, 0.9)');
      coreGrad.addColorStop(0.3, 'rgba(56, 189, 248, 0.4)');
      coreGrad.addColorStop(0.7, 'rgba(168, 85, 247, 0.15)');
      coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(cx, cy, corePulse * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      // Project & Render 3D Points
      const projectedPoints = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.pulse += 0.03;

        // Subtle breath pulsation
        const rMult = 1 + Math.sin(p.pulse) * 0.06;
        const x0 = p.baseX * rMult;
        const y0 = p.baseY * rMult;
        const z0 = p.baseZ * rMult;

        // Rotate Y
        const x1 = x0 * cosY - z0 * sinY;
        const z1 = z0 * cosY + x0 * sinY;

        // Rotate X
        const y2 = y0 * cosX - z1 * sinX;
        const z2 = z1 * cosX + y0 * sinX;

        // Perspective Projection
        const fov = 420;
        const scale = fov / (fov + z2 + 250);
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;
        const alpha = Math.max(0.12, (z2 + SPHERE_RADIUS) / (2 * SPHERE_RADIUS));

        projectedPoints.push({ px, py, z2, alpha, scale });
      }

      // Sort points by depth (painter's algorithm)
      projectedPoints.sort((a, b) => a.z2 - b.z2);

      // Draw connecting holographic web lines
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projectedPoints.length; i++) {
        const p1 = projectedPoints[i];
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p2 = projectedPoints[j];
          const dist = Math.hypot(p1.px - p2.px, p1.py - p2.py);
          if (dist < 46) {
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            const lineAlpha = (1 - dist / 46) * Math.min(p1.alpha, p2.alpha) * 0.35;
            ctx.strokeStyle = `rgba(0, 245, 212, ${lineAlpha})`;
            ctx.stroke();
          }
        }
      }

      // Render glowing nodes
      for (let i = 0; i < projectedPoints.length; i++) {
        const { px, py, alpha, scale } = projectedPoints[i];
        const dotRadius = Math.max(1, 2.4 * scale);

        ctx.beginPath();
        ctx.arc(px, py, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = alpha > 0.5 ? '#00f5d4' : '#38bdf8';
        ctx.globalAlpha = alpha * 0.9;
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#00f5d4';
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      // Draw 3D Orbital Rings
      rings.forEach((ring, index) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * ring.speed * 2);
        ctx.scale(1, ring.tiltX);

        ctx.beginPath();
        ctx.arc(0, 0, ring.radius, 0, Math.PI * 2);
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1.2;
        ctx.globalAlpha = 0.35 + Math.sin(time + index) * 0.15;
        ctx.setLineDash([8, 14]);
        ctx.stroke();

        // Orbiting particle satellite
        const angle = time * ring.speed * 8;
        const satX = Math.cos(angle) * ring.radius;
        const satY = Math.sin(angle) * ring.radius;

        ctx.beginPath();
        ctx.arc(satX, satY, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = ring.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = ring.color;
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center">
      {/* Background radial highlight */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-neon-cyan/10 filter blur-3xl animate-pulse" />
      </div>

      {/* Cyber Reticle Markers */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-neon-cyan/20 animate-spin-slow" />
      </div>

      <canvas ref={canvasRef} className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Futuristic HUD overlay tags */}
      <div className="absolute bottom-4 left-6 hidden sm:flex items-center gap-2 text-[10px] font-mono text-neon-cyan/70 bg-cyber-dark/80 px-2.5 py-1 rounded border border-neon-cyan/20 backdrop-blur-md">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping" />
        AI MATRIX TELEMETRY // ACTIVE
      </div>

      <div className="absolute top-4 right-6 hidden sm:flex items-center gap-2 text-[10px] font-mono text-slate-400 bg-cyber-dark/80 px-2.5 py-1 rounded border border-slate-700/50 backdrop-blur-md">
        COORDS: [37.7749° N, 122.4194° W]
      </div>
    </div>
  );
}
