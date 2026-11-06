import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const computedCursor = window.getComputedStyle(target).cursor;
      const isClickable =
        computedCursor === 'pointer' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.hasAttribute('role');

      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-purple-400/50 bg-purple-500/10 pointer-events-none"
        animate={{
          x: mousePosition.x - (isPointer ? 24 : 16),
          y: mousePosition.y - (isPointer ? 24 : 16),
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          scale: isPointer ? 1.2 : 1,
          borderColor: isPointer ? 'rgba(103, 232, 249, 0.7)' : 'rgba(167, 139, 250, 0.5)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.5 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none shadow-sm shadow-cyan-400"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 0.6 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 600, mass: 0.1 }}
      />
    </div>
  );
};

