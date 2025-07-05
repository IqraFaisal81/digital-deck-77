import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface Shape3D {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  speed: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  rotationSpeedX: number;
  rotationSpeedY: number;
  rotationSpeedZ: number;
  type: 'cube' | 'pyramid' | 'sphere' | 'diamond' | 'dodecahedron';
  gradient: string;
  pulseOffset: number;
}

interface Galaxy3DShapesProps {
  className?: string;
}

export const Galaxy3DShapes: React.FC<Galaxy3DShapesProps> = ({ className = "" }) => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [shapes, setShapes] = useState<Shape3D[]>([]);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();

  // Initialize 3D shapes
  useEffect(() => {
    const initShapes = () => {
      const newShapes: Shape3D[] = [];
      const shapeTypes: Shape3D['type'][] = ['cube', 'pyramid', 'sphere', 'diamond', 'dodecahedron'];
      const cosmicGradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Cosmic purple-blue
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // Pink nebula
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', // Cyan space
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', // Teal aurora
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', // Sunset nebula
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', // Soft galaxy
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', // Rose nebula
        'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', // Warm star
      ];
      
      for (let i = 0; i < 12; i++) {
        const baseX = Math.random() * 100;
        const baseY = Math.random() * 100;
        newShapes.push({
          id: i,
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          size: Math.random() * 40 + 20, // 20px to 60px
          opacity: Math.random() * 0.6 + 0.3, // 0.3 to 0.9
          speed: Math.random() * 0.8 + 0.4, // 0.4 to 1.2
          rotationX: Math.random() * 360,
          rotationY: Math.random() * 360,
          rotationZ: Math.random() * 360,
          rotationSpeedX: (Math.random() - 0.5) * 2, // -1 to 1
          rotationSpeedY: (Math.random() - 0.5) * 2,
          rotationSpeedZ: (Math.random() - 0.5) * 1.5,
          type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
          gradient: cosmicGradients[Math.floor(Math.random() * cosmicGradients.length)],
          pulseOffset: Math.random() * Math.PI * 2,
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

  // Animate shapes
  useEffect(() => {
    const animate = () => {
      setShapes(prevShapes =>
        prevShapes.map(shape => {
          // Calculate distance from mouse
          const dx = mousePos.x - shape.x;
          const dy = mousePos.y - shape.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Mouse attraction settings
          const attractionRadius = 30;
          const maxForce = 2;
          
          let newX = shape.x;
          let newY = shape.y;
          let newOpacity = shape.opacity;
          let newSize = shape.size;
          
          // Pulsing effect
          const time = Date.now() * 0.001;
          const pulse = Math.sin(time * shape.speed + shape.pulseOffset) * 0.2 + 0.8;
          
          if (distance < attractionRadius && mousePos.x > -100) {
            // Apply attraction force (shapes move towards cursor)
            const force = (attractionRadius - distance) / attractionRadius * maxForce;
            const angle = Math.atan2(mousePos.y - shape.y, mousePos.x - shape.x);
            
            newX = shape.x + Math.cos(angle) * force * 0.4;
            newY = shape.y + Math.sin(angle) * force * 0.4;
            newOpacity = Math.min(1, (shape.opacity + 0.4) * pulse);
            newSize = shape.size * 1.4; // Grow when mouse is near
            
            // Keep shapes within bounds
            newX = Math.max(0, Math.min(100, newX));
            newY = Math.max(0, Math.min(100, newY));
          } else {
            // Return to base position
            const returnSpeed = 0.03;
            newX = shape.x + (shape.baseX - shape.x) * returnSpeed;
            newY = shape.y + (shape.baseY - shape.y) * returnSpeed;
            newOpacity = shape.opacity * pulse;
            newSize = shape.size > 20 ? shape.size * 0.98 : shape.size;
          }
          
          return {
            ...shape,
            x: newX,
            y: newY,
            opacity: Math.max(0.2, Math.min(1, newOpacity)),
            size: newSize,
            rotationX: shape.rotationX + shape.rotationSpeedX,
            rotationY: shape.rotationY + shape.rotationSpeedY,
            rotationZ: shape.rotationZ + shape.rotationSpeedZ,
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

  // Get shape-specific styles
  const getShapeStyle = (shape: Shape3D) => {
    const baseOpacity = theme === 'dark' ? shape.opacity : shape.opacity * 0.6;
    const glowIntensity = theme === 'dark' ? '10px' : '5px';
    
    const baseStyle = {
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      background: shape.gradient,
      opacity: baseOpacity,
      transform: `translate(-50%, -50%) 
                  perspective(1000px) 
                  rotateX(${shape.rotationX}deg) 
                  rotateY(${shape.rotationY}deg) 
                  rotateZ(${shape.rotationZ}deg)`,
      filter: `blur(0.5px) drop-shadow(0 0 ${glowIntensity} rgba(100, 150, 255, 0.3))`,
      transformStyle: 'preserve-3d' as const,
    };

    // Shape-specific modifications
    switch (shape.type) {
      case 'cube':
        return {
          ...baseStyle,
          borderRadius: '4px',
          boxShadow: theme === 'dark' 
            ? `0 0 20px rgba(100, 150, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)`
            : `0 0 15px rgba(100, 150, 255, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.2)`,
        };
      
      case 'sphere':
        return {
          ...baseStyle,
          borderRadius: '50%',
          boxShadow: theme === 'dark' 
            ? `0 0 25px rgba(150, 100, 255, 0.5), inset -10px -10px 20px rgba(0, 0, 0, 0.3)`
            : `0 0 20px rgba(150, 100, 255, 0.3), inset -5px -5px 15px rgba(0, 0, 0, 0.2)`,
        };
      
      case 'diamond':
        return {
          ...baseStyle,
          clipPath: 'polygon(50% 0%, 0% 50%, 50% 100%, 100% 50%)',
          boxShadow: theme === 'dark' 
            ? `0 0 20px rgba(255, 100, 150, 0.4)`
            : `0 0 15px rgba(255, 100, 150, 0.3)`,
        };
      
      case 'pyramid':
        return {
          ...baseStyle,
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          boxShadow: theme === 'dark' 
            ? `0 0 18px rgba(100, 255, 150, 0.4)`
            : `0 0 12px rgba(100, 255, 150, 0.3)`,
        };
      
      case 'dodecahedron':
        return {
          ...baseStyle,
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          boxShadow: theme === 'dark' 
            ? `0 0 22px rgba(255, 150, 100, 0.4)`
            : `0 0 16px rgba(255, 150, 100, 0.3)`,
        };
      
      default:
        return baseStyle;
    }
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
          style={getShapeStyle(shape)}
        />
      ))}
    </div>
  );
};
