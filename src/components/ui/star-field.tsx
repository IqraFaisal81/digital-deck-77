import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface StarData {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  baseX: number;
  baseY: number;
  rotation: number;
  twinkleOffset: number;
  color: string;
}

interface StarFieldProps {
  className?: string;
}

export const StarField: React.FC<StarFieldProps> = ({ className = "" }) => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<StarData[]>([]);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();

  // Only show in dark mode
  if (theme !== 'dark') {
    return null;
  }

  useEffect(() => {
    const initStars = () => {
      const newStars: StarData[] = [];
      const starColors = ['text-white', 'text-blue-100', 'text-blue-200', 'text-slate-100'];
      
      for (let i = 0; i < 25; i++) {
        const baseX = Math.random() * 100;
        const baseY = Math.random() * 100;
        newStars.push({
          id: i,
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          size: Math.random() * 12 + 8,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 1 + 0.5,
          rotation: Math.random() * 360,
          twinkleOffset: Math.random() * Math.PI * 2,
          color: starColors[Math.floor(Math.random() * starColors.length)]
        });
      }
      setStars(newStars);
    };

    initStars();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  useEffect(() => {
    const animate = () => {
      setStars(prevStars =>
        prevStars.map(star => {
          // Calculate distance from mouse
          const dx = mousePos.x - star.x;
          const dy = mousePos.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Calculate attraction force (stars move towards mouse)
          const attractionRadius = 25;
          const maxForce = 1.5;
          
          let newX = star.x;
          let newY = star.y;
          let newOpacity = star.opacity;
          let newSize = star.size;
          
          // Twinkling effect
          const time = Date.now() * 0.001;
          const twinkle = Math.sin(time * star.speed + star.twinkleOffset) * 0.3 + 0.7;
          
          if (distance < attractionRadius && mousePos.x > -100) {
            // Apply attraction force
            const force = (attractionRadius - distance) / attractionRadius * maxForce;
            const angle = Math.atan2(mousePos.y - star.y, mousePos.x - star.x);
            
            newX = star.x + Math.cos(angle) * force * 0.3;
            newY = star.y + Math.sin(angle) * force * 0.3;
            newOpacity = Math.min(1, (star.opacity + 0.5) * twinkle);
            newSize = star.size * 1.3; // Grow when mouse is near
            
            // Keep stars within bounds
            newX = Math.max(0, Math.min(100, newX));
            newY = Math.max(0, Math.min(100, newY));
          } else {
            // Gradually return to base position when mouse is away
            const returnSpeed = 0.02;
            newX = star.x + (star.baseX - star.x) * returnSpeed;
            newY = star.y + (star.baseY - star.y) * returnSpeed;
            newOpacity = star.opacity * twinkle;
            newSize = star.size > 8 ? star.size * 0.99 : star.size; // Shrink back to normal
          }
          
          return {
            ...star,
            x: newX,
            y: newY,
            opacity: Math.max(0.1, Math.min(1, newOpacity)),
            size: newSize,
            rotation: star.rotation + star.speed * 0.5
          };
        })
      );
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos]);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ pointerEvents: 'none' }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute transition-all duration-300 ease-out"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            transform: `translate(-50%, -50%) rotate(${star.rotation}deg)`,
            opacity: star.opacity,
          }}
        >
          <Star
            size={star.size}
            className={`${star.color} drop-shadow-sm filter`}
            fill="currentColor"
          />
        </div>
      ))}
    </div>
  );
};
