import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface SimpleShape {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleOffset: number;
  color: string;
}

interface Galaxy3DShapesProps {
  className?: string;
}

export const Galaxy3DShapes: React.FC<Galaxy3DShapesProps> = ({ className = "" }) => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [shapes, setShapes] = useState<SimpleShape[]>([]);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();

  // Initialize simple star shapes
  useEffect(() => {
    const initShapes = () => {
      const newShapes: SimpleShape[] = [];
      const starColors = ['#ffffff', '#f0f8ff', '#e6f3ff', '#ddeeff'];
      
      // Create more small stars for a starfield effect
      for (let i = 0; i < 30; i++) {
        const baseX = Math.random() * 100;
        const baseY = Math.random() * 100;
        
        newShapes.push({
          id: i,
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          size: Math.random() * 3 + 2, // Much smaller: 2px to 5px
          opacity: Math.random() * 0.8 + 0.2, // 0.2 to 1.0
          speed: Math.random() * 1 + 0.5, // 0.5 to 1.5
          twinkleOffset: Math.random() * Math.PI * 2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
      setShapes(newShapes);
    };

    initShapes();
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

  // Simple animation with twinkling effect
  useEffect(() => {
    const animate = () => {
      setShapes(prevShapes =>
        prevShapes.map(shape => {
          // Calculate distance from mouse
          const dx = mousePos.x - shape.x;
          const dy = mousePos.y - shape.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Mouse interaction settings
          const attractionRadius = 20;
          const maxForce = 0.8;
          
          let newX = shape.x;
          let newY = shape.y;
          let newOpacity = shape.opacity;
          let newSize = shape.size;
          
          // Twinkling effect
          const time = Date.now() * 0.001;
          const twinkle = Math.sin(time * shape.speed + shape.twinkleOffset) * 0.3 + 0.7;
          
          if (distance < attractionRadius && mousePos.x > -100) {
            // Gentle attraction to mouse
            const force = (attractionRadius - distance) / attractionRadius * maxForce;
            const angle = Math.atan2(mousePos.y - shape.y, mousePos.x - shape.x);
            
            newX = shape.x + Math.cos(angle) * force * 0.2;
            newY = shape.y + Math.sin(angle) * force * 0.2;
            newOpacity = Math.min(1, (shape.opacity + 0.3) * twinkle);
            newSize = shape.size * 1.5; // Grow slightly when mouse is near
            
            // Keep shapes within bounds
            newX = Math.max(2, Math.min(98, newX));
            newY = Math.max(2, Math.min(98, newY));
          } else {
            // Gradually return to base position
            const returnSpeed = 0.015;
            newX = shape.x + (shape.baseX - shape.x) * returnSpeed;
            newY = shape.y + (shape.baseY - shape.y) * returnSpeed;
            newOpacity = shape.opacity * twinkle;
            newSize = shape.size;
          }
          
          return {
            ...shape,
            x: newX,
            y: newY,
            opacity: Math.max(0.1, Math.min(1, newOpacity)),
            size: newSize,
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

  // Get simple star style
  const getStarStyle = (shape: SimpleShape) => {
    const baseOpacity = theme === 'dark' ? shape.opacity : shape.opacity * 0.6;
    
    return {
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      backgroundColor: shape.color,
      opacity: baseOpacity,
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      boxShadow: theme === 'dark' 
        ? `0 0 ${shape.size * 2}px rgba(255, 255, 255, 0.4)`
        : `0 0 ${shape.size}px rgba(255, 255, 255, 0.6)`,
    };
  };

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ pointerEvents: 'none' }}
    >
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute transition-all duration-300 ease-out"
          style={getStarStyle(shape)}
        />
      ))}
    </div>
  );
};
