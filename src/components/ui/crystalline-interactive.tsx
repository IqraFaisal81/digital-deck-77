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
  baseX: number;
  baseY: number;
}

interface CrystallineInteractiveProps {
  className?: string;
}

export const CrystallineInteractive: React.FC<CrystallineInteractiveProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [crystals, setCrystals] = useState<Crystal[]>([]);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();

  const colors = [
    'rgba(59, 130, 246, 0.4)', // blue
    'rgba(147, 51, 234, 0.4)', // purple  
    'rgba(236, 72, 153, 0.4)', // pink
    'rgba(16, 185, 129, 0.4)', // emerald
    'rgba(245, 158, 11, 0.4)', // amber
  ];

  useEffect(() => {
    const initCrystals = () => {
      const newCrystals: Crystal[] = [];
      for (let i = 0; i < 12; i++) {
        const baseX = Math.random() * 100;
        const baseY = Math.random() * 100;
        newCrystals.push({
          id: i,
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          size: Math.random() * 25 + 15,
          rotation: Math.random() * 360,
          opacity: Math.random() * 0.4 + 0.3,
          speed: Math.random() * 0.8 + 0.4,
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
      setCrystals(prevCrystals =>
        prevCrystals.map(crystal => {
          // Calculate distance from mouse
          const dx = mousePos.x - crystal.x;
          const dy = mousePos.y - crystal.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Calculate repulsion force (stronger when closer)
          const repulsionRadius = 25;
          const maxForce = 3;
          
          let newX = crystal.x;
          let newY = crystal.y;
          let newOpacity = crystal.opacity;
          
          if (distance < repulsionRadius && mousePos.x > -100) {
            // Apply repulsion force
            const force = (repulsionRadius - distance) / repulsionRadius * maxForce;
            const angle = Math.atan2(crystal.y - mousePos.y, crystal.x - mousePos.x);
            
            newX = crystal.x + Math.cos(angle) * force;
            newY = crystal.y + Math.sin(angle) * force;
            newOpacity = Math.min(0.9, crystal.opacity + 0.3);
            
            // Keep crystals within bounds
            newX = Math.max(0, Math.min(100, newX));
            newY = Math.max(0, Math.min(100, newY));
          } else {
            // Gradually return to base position when mouse is away
            const returnSpeed = 0.02;
            newX = crystal.x + (crystal.baseX - crystal.x) * returnSpeed;
            newY = crystal.y + (crystal.baseY - crystal.y) * returnSpeed;
            newOpacity = Math.max(0.2, crystal.opacity - 0.01);
          }
          
          return {
            ...crystal,
            x: newX,
            y: newY,
            rotation: crystal.rotation + crystal.speed,
            opacity: newOpacity
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
      {crystals.map((crystal) => (
        <div
          key={crystal.id}
          className="absolute transition-all duration-150 ease-out"
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
            className="drop-shadow-lg filter"
          >
            <polygon
              points="20,2 35,12 35,28 20,38 5,28 5,12"
              fill={crystal.color}
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
            />
            <polygon
              points="20,8 28,14 28,26 20,32 12,26 12,14"
              fill="rgba(255,255,255,0.2)"
            />
            <circle
              cx="20"
              cy="20"
              r="3"
              fill="rgba(255,255,255,0.6)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
