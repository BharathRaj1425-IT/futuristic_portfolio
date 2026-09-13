import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CardGlow({
  children,
  className = '',
  accentColor = 'cyan', // 'cyan' | 'purple' | 'blue'
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
    cyan: 'rgba(0, 245, 212, 0.15)',
    purple: 'rgba(168, 85, 247, 0.18)',
    blue: 'rgba(56, 189, 248, 0.15)',
  };

  const borderColorMap = {
    cyan: 'hover:border-neon-cyan/50',
    purple: 'hover:border-neon-purple/50',
    blue: 'hover:border-neon-blue/50',
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl border border-slate-800/80 bg-cyber-dark/60 backdrop-blur-xl transition-all duration-300 ${borderColorMap[accentColor]} ${className} ${corners ? 'cyber-corners' : ''}`}
    >
      {/* Radial Mouse Spotlight Follower */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColorMap[accentColor]}, transparent 60%)`,
        }}
      />

      {/* Cyber Grid Accent Overlay */}
      <div className="absolute inset-0 bg-cyber-dots bg-[size:16px_16px] opacity-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
