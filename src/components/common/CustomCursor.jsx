import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const checkHoverable = (e) => {
      const target = e.target;
      const isInteractive = Boolean(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        target.getAttribute('data-cursor') === 'pointer'
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', checkHoverable);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', checkHoverable);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Tracking Reticle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-neon-cyan/50 hidden md:block"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          scale: isClicked ? 0.85 : 1,
          borderColor: isHovered ? '#00f5d4' : 'rgba(0, 245, 212, 0.4)',
          backgroundColor: isHovered ? 'rgba(0, 245, 212, 0.08)' : 'transparent',
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
        style={{
          boxShadow: isHovered ? '0 0 16px rgba(0, 245, 212, 0.4)' : 'none',
        }}
      />

      {/* Center Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-neon-cyan hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isClicked ? 1.5 : isHovered ? 0.6 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 800,
        }}
        style={{
          width: 6,
          height: 6,
          boxShadow: '0 0 8px #00f5d4',
        }}
      />
    </>
  );
}
