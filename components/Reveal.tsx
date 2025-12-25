import React, { useEffect, useRef, useState } from 'react';

type RevealVariant = 'fade-up' | 'fade-left' | 'fade-right' | 'zoom' | 'rotate';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  width?: 'fit-content' | '100%';
  variant?: RevealVariant;
  className?: string;
}

export const Reveal = ({ 
  children, 
  delay = 0, 
  width = '100%', 
  variant = 'fade-up',
  className = ''
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
                setIsVisible(true);
            }, delay);
            if (ref.current) observer.unobserve(ref.current);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getVariantClass = () => {
    switch (variant) {
      case 'fade-left': return 'reveal-hidden-fade-left';
      case 'fade-right': return 'reveal-hidden-fade-right';
      case 'zoom': return 'reveal-hidden-zoom';
      case 'rotate': return 'reveal-hidden-rotate';
      default: return 'reveal-hidden-fade-up';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`reveal-base ${getVariantClass()} ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={{ width }}
    >
      {children}
    </div>
  );
};