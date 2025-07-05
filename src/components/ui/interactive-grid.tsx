
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface GridPoint {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  isDistorted: boolean;
}

interface InteractiveGridProps {
  className?: string;
}

export const InteractiveGrid: React.FC<InteractiveGridProps> = ({ className = "" }) => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [gridPoints, setGridPoints] = useState<GridPoint[]>([]);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();

  // Initialize grid points
  useEffect(() => {
    const initGrid = () => {
      const points: GridPoint[] = [];
      const spacing = 60; // Distance between grid points
      const cols = Math.ceil(100 / (spacing / 10)); // Approximately 17 columns
      const rows = Math.ceil(100 / (spacing / 10)); // Approximately 17 rows
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = (col * spacing / 10) + 5; // Add offset and convert to percentage
          const y = (row * spacing / 10) + 5;
          
          if (x <= 95 && y <= 95) { // Keep within bounds
            points.push({
              x,
              y,
              baseX: x,
              baseY: y,
              isDistorted: false,
            });
          }
        }
      }
      setGridPoints(points);
    };

    initGrid();
  }, []);

  // Track mouse movement
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

  // Animate grid distortion
  useEffect(() => {
    const animate = () => {
      setGridPoints(prevPoints =>
        prevPoints.map(point => {
          const dx = mousePos.x - point.x;
          const dy = mousePos.y - point.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const influenceRadius = 25; // Radius of mouse influence
          const maxDisplacement = 8; // Maximum displacement in percentage
          
          if (distance < influenceRadius && mousePos.x > -100) {
            // Calculate distortion based on distance
            const influence = (influenceRadius - distance) / influenceRadius;
            const displacement = influence * maxDisplacement;
            
            // Calculate direction away from mouse
            const angle = Math.atan2(dy, dx);
            const newX = point.baseX - Math.cos(angle) * displacement;
            const newY = point.baseY - Math.sin(angle) * displacement;
            
            return {
              ...point,
              x: Math.max(0, Math.min(100, newX)),
              y: Math.max(0, Math.min(100, newY)),
              isDistorted: true,
            };
          } else {
            // Return to original position
            const returnSpeed = 0.1;
            const newX = point.x + (point.baseX - point.x) * returnSpeed;
            const newY = point.y + (point.baseY - point.y) * returnSpeed;
            
            return {
              ...point,
              x: newX,
              y: newY,
              isDistorted: Math.abs(newX - point.baseX) > 0.5 || Math.abs(newY - point.baseY) > 0.5,
            };
          }
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

  const dotColor = theme === 'dark' 
    ? 'bg-white/20 shadow-white/10' 
    : 'bg-black/15 shadow-black/5';
    
  const distortedDotColor = theme === 'dark' 
    ? 'bg-white/40 shadow-white/20' 
    : 'bg-black/25 shadow-black/10';

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ pointerEvents: 'none' }}
    >
      {gridPoints.map((point, index) => (
        <div
          key={index}
          className={`absolute rounded-full transition-all duration-200 ease-out ${
            point.isDistorted ? distortedDotColor : dotColor
          }`}
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: point.isDistorted ? '3px' : '2px',
            height: point.isDistorted ? '3px' : '2px',
            transform: 'translate(-50%, -50%)',
            opacity: point.isDistorted ? 1 : 0.6,
          }}
        />
      ))}
    </div>
  );
};
