import React, { useEffect, useState } from 'react';

export const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother performance if needed, 
      // but simple state update is usually fine for this simple effect
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable element for subtle cursor change
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('glass-card');
      
      setIsHoveringClickable(!!isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      {/* Background ambient glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(45, 212, 191, 0.04), transparent 40%)`,
        }}
      />
      
      {/* Dark mode intense glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 hidden dark:block transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(45, 212, 191, 0.08), transparent 40%)`,
        }}
      />

      {/* Cursor Follower Ring */}
      <div
        className="pointer-events-none fixed z-50 rounded-full border border-teal-500/30 dark:border-teal-400/30 transition-all duration-100 ease-out hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          width: isHoveringClickable ? '40px' : '20px',
          height: isHoveringClickable ? '40px' : '20px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: isHoveringClickable ? 'rgba(45, 212, 191, 0.1)' : 'transparent',
        }}
      />
    </>
  );
};