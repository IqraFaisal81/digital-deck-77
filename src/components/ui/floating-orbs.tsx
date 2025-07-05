import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface OrbData {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  baseX: number;
  baseY: number;
  attraction: number;
  trail: { x: number; y: number; opacity: number }[];
}

interface FloatingOrbsProps {
  className?: string;
}

export const FloatingOrbs: React.FC<FloatingOrbsProps> = ({ className = "" }) => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [orbs, setOrbs] = useState<OrbData[]>([]);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const initOrbs = () => {
      const newOrbs: OrbData[] = [];
      
      for (let i = 0; i < 10; i++) {
        const baseX = Math.random() * 100;
        const baseY = Math.random() * 100;
        newOrbs.push({
          id: i,
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          size: Math.random() * 20 + 10, // 10-30px
          opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8
          attraction: Math.random() * 0.5 + 0.3, // 0.3-0.8
          trail: []
        });
      }
      setOrbs(newOrbs);
    };

    initOrbs();
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
      setOrbs(prevOrbs =>
        prevOrbs.map(orb => {
          // Calculate distance from mouse
          const dx = mousePos.x - orb.x;
          const dy = mousePos.y - orb.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let newX = orb.x;
          let newY = orb.y;
          
          // Mouse attraction
          const attractionRadius = 30;
          if (distance < attractionRadius && mousePos.x > -100) {
            const force = (attractionRadius - distance) / attractionRadius * orb.attraction;
            const angle = Math.atan2(mousePos.y - orb.y, mousePos.x - orb.x);
            
            newX = orb.x + Math.cos(angle) * force * 2;
            newY = orb.y + Math.sin(angle) * force * 2;
            
            // Keep orbs within bounds
            newX = Math.max(0, Math.min(100, newX));
            newY = Math.max(0, Math.min(100, newY));
          } else {
            // Gradually return to base position
            const returnSpeed = 0.02;
            newX = orb.x + (orb.baseX - orb.x) * returnSpeed;
            newY = orb.y + (orb.baseY - orb.y) * returnSpeed;
          }
          
          // Update trail
          const newTrail = [
            { x: orb.x, y: orb.y, opacity: 0.6 },
            ...orb.trail.slice(0, 4).map(point => ({
              ...point,
              opacity: point.opacity * 0.8
            }))
          ];
          
          return {
            ...orb,
            x: newX,
            y: newY,
            trail: newTrail
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

  const orbColor = theme === 'dark' 
    ? 'bg-white/30 shadow-white/20' 
    : 'bg-black/20 shadow-black/10';
    
  const trailColor = theme === 'dark' 
    ? 'bg-white/20' 
    : 'bg-black/10';

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ pointerEvents: 'none' }}
    >
      {orbs.map((orb) => (
        <React.Fragment key={orb.id}>
          {/* Trail particles */}
          {orb.trail.map((trailPoint, index) => (
            <div
              key={`${orb.id}-trail-${index}`}
              className={`absolute rounded-full ${trailColor} transition-all duration-300 ease-out`}
              style={{
                left: `${trailPoint.x}%`,
                top: `${trailPoint.y}%`,
                width: `${orb.size * 0.6}px`,
                height: `${orb.size * 0.6}px`,
                transform: 'translate(-50%, -50%)',
                opacity: trailPoint.opacity,
              }}
            />
          ))}
          
          {/* Main orb */}
          <div
            className={`absolute rounded-full ${orbColor} shadow-lg transition-all duration-300 ease-out`}
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              transform: 'translate(-50%, -50%)',
              opacity: orb.opacity,
              filter: 'blur(0.5px)',
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
