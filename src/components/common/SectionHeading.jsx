import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {/* High-Tech Protocol Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-cyan/30 bg-cyber-dark/80 text-neon-cyan text-xs font-mono tracking-widest uppercase mb-4 shadow-sm backdrop-blur-md ${isCenter ? 'mx-auto' : ''}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping" />
          <span>{badge}</span>
        </motion.div>
      )}

      {/* Futuristic Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 font-display"
      >
        <span className="cyber-gradient-text">{title}</span>
      </motion.h2>

      {/* Narrative Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-slate-400 text-sm md:text-base max-w-2xl font-normal leading-relaxed ${isCenter ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Futuristic accent bar */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '80px', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className={`h-0.5 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple mt-5 ${isCenter ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
