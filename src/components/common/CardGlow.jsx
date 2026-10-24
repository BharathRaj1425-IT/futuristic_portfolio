import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CardGlow({
  children,
  className = '',
  accentColor = 'cyan', // 'cyan' | 'purple' | 'amethyst' | 'blue'
  corners = true,
  onClick,
}) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowColorMap = {
    cyan: 'rgba(0, 240, 255, 0.20)', // Electric Cyan
    purple: 'rgba(157, 78, 221, 0.26)', // Royal Amethyst
    amethyst: 'rgba(157, 78, 221, 0.28)', // Royal Amethyst
    blue: 'rgba(0, 240, 255, 0.18)',
  };

  const borderColorMap = {
    cyan: 'hover:border-neon-cyan/60 hover:shadow-[0_0_24px_-3px_rgba(0,240,255,0.4)]',
    purple: 'hover:border-royal-amethyst/60 hover:shadow-[0_0_26px_-3px_rgba(157,78,221,0.45)]',
    amethyst: 'hover:border-royal-amethyst/70 hover:shadow-[0_0_28px_-3px_rgba(157,78,221,0.5)]',
    blue: 'hover:border-neon-cyan/50 hover:shadow-[0_0_20px_-3px_rgba(0,240,255,0.35)]',
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl border border-slate-800/80 bg-cyber-dark/75 backdrop-blur-xl transition-all duration-300 ${borderColorMap[accentColor] || borderColorMap.cyan} ${className} ${corners ? 'cyber-corners' : ''}`}
    >
      {/* Radial Mouse Spotlight Follower */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColorMap[accentColor] || glowColorMap.cyan}, transparent 60%)`,
        }}
      />

      {/* Cyber Grid Accent Overlay */}
      <div className="absolute inset-0 bg-cyber-dots bg-[size:16px_16px] opacity-15 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
