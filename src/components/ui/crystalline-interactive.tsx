
import React, { useEffect, useRef, useState } from 'react';

interface Crystal {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  speed: number;
  color: string;
}

interface CrystallineInteractiveProps {
  className?: string;
}

export const CrystallineInteractive: React.FC<CrystallineInteractiveProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [crystals, setCrystals] = useState<Crystal[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const colors = [
    'rgba(59, 130, 246, 0.3)', // blue
    'rgba(147, 51, 234, 0.3)', // purple  
    'rgba(236, 72, 153, 0.3)', // pink
    'rgba(16, 185, 129, 0.3)', // emerald
    'rgba(245, 158, 11, 0.3)', // amber
  ];

  useEffect(() => {
    const initCrystals = () => {
      const newCrystals: Crystal[] = [];
      for (let i = 0; i < 15; i++) {
        newCrystals.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 30 + 20,
          rotation: Math.random() * 360,
          opacity: Math.random() * 0.6 + 0.2,
          speed: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setCrystals(newCrystals);
    };

    initCrystals();
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

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const animate = () => {
      setCrystals(prevCrystals =>
        prevCrystals.map(crystal => {
          // Calculate distance from mouse
          const dx = mousePos.x - crystal.x;
          const dy = mousePos.y - crystal.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Apply mouse repulsion/attraction
          const force = Math.max(0, 30 - distance) * 0.01;
          const angle = Math.atan2(dy, dx);
          
          return {
            ...crystal,
            x: crystal.x + Math.cos(angle) * force * crystal.speed,
            y: crystal.y + Math.sin(angle) * force * crystal.speed,
            rotation: crystal.rotation + crystal.speed * 2,
            opacity: Math.min(0.8, crystal.opacity + force * 2)
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
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {crystals.map((crystal) => (
        <div
          key={crystal.id}
          className="absolute transition-all duration-100 ease-out"
          style={{
            left: `${crystal.x}%`,
            top: `${crystal.y}%`,
            transform: `translate(-50%, -50%) rotate(${crystal.rotation}deg)`,
            opacity: crystal.opacity,
          }}
        >
          <svg
            width={crystal.size}
            height={crystal.size}
            viewBox="0 0 40 40"
            className="drop-shadow-lg"
          >
            <polygon
              points="20,2 35,12 35,28 20,38 5,28 5,12"
              fill={crystal.color}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
              className="animate-pulse"
            />
            <polygon
              points="20,8 28,14 28,26 20,32 12,26 12,14"
              fill="rgba(255,255,255,0.1)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
