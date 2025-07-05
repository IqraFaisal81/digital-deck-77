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
  orbitRadius: number;
  orbitAngle: number;
  orbitSpeed: number;
}

interface Galaxy3DShapesProps {
  className?: string;
}

export const Galaxy3DShapes: React.FC<Galaxy3DShapesProps> = ({ className = "" }) => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [shapes, setShapes] = useState<Shape3D[]>([]);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [globalRotation, setGlobalRotation] = useState(0);
  const animationRef = useRef<number>();

  // Initialize 3D shapes with orbital motion
  useEffect(() => {
    const initShapes = () => {
      const newShapes: Shape3D[] = [];
      const shapeTypes: Shape3D['type'][] = ['cube', 'pyramid', 'sphere', 'diamond', 'dodecahedron'];
      const cosmicGradients = [
        'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 100%)', // White sphere
        'radial-gradient(circle, rgba(200,220,255,0.8) 0%, rgba(100,150,255,0.2) 100%)', // Light blue sphere
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Cosmic purple-blue
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // Pink nebula
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', // Cyan space
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', // Teal aurora
        'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 100%)', // Another white sphere
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', // Soft galaxy
      ];
      
      // Create more shapes for richer background
      for (let i = 0; i < 20; i++) {
        const orbitRadius = Math.random() * 30 + 10; // 10px to 40px orbit radius
        const orbitAngle = Math.random() * Math.PI * 2;
        const baseX = 50 + Math.cos(orbitAngle) * orbitRadius; // Center around middle
        const baseY = 50 + Math.sin(orbitAngle) * orbitRadius;
        
        newShapes.push({
          id: i,
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          size: Math.random() * 50 + 15, // 15px to 65px
          opacity: Math.random() * 0.7 + 0.2, // 0.2 to 0.9
          speed: Math.random() * 1.2 + 0.3, // 0.3 to 1.5
          rotationX: Math.random() * 360,
          rotationY: Math.random() * 360,
          rotationZ: Math.random() * 360,
          rotationSpeedX: (Math.random() - 0.5) * 3, // -1.5 to 1.5
          rotationSpeedY: (Math.random() - 0.5) * 3,
          rotationSpeedZ: (Math.random() - 0.5) * 2,
          type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
          gradient: cosmicGradients[Math.floor(Math.random() * cosmicGradients.length)],
          pulseOffset: Math.random() * Math.PI * 2,
          orbitRadius,
          orbitAngle,
          orbitSpeed: (Math.random() - 0.5) * 0.02, // Slow orbital motion
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

  // Animate shapes with constant rotation and orbital motion
  useEffect(() => {
    const animate = () => {
      // Update global rotation for background effect
      setGlobalRotation(prev => (prev + 0.2) % 360);
      
      setShapes(prevShapes =>
        prevShapes.map(shape => {
          // Calculate distance from mouse
          const dx = mousePos.x - shape.x;
          const dy = mousePos.y - shape.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Mouse interaction settings
          const attractionRadius = 25;
          const maxForce = 1.5;
          
          let newX = shape.x;
          let newY = shape.y;
          let newOpacity = shape.opacity;
          let newSize = shape.size;
          
          // Pulsing effect
          const time = Date.now() * 0.001;
          const pulse = Math.sin(time * shape.speed + shape.pulseOffset) * 0.3 + 0.7;
          
          // Update orbital position for continuous rotation
          const newOrbitAngle = shape.orbitAngle + shape.orbitSpeed;
          const orbitX = 50 + Math.cos(newOrbitAngle) * shape.orbitRadius;
          const orbitY = 50 + Math.sin(newOrbitAngle) * shape.orbitRadius;
          
          if (distance < attractionRadius && mousePos.x > -100) {
            // Apply attraction force when mouse is near
            const force = (attractionRadius - distance) / attractionRadius * maxForce;
            const angle = Math.atan2(mousePos.y - shape.y, mousePos.x - shape.x);
            
            newX = shape.x + Math.cos(angle) * force * 0.3;
            newY = shape.y + Math.sin(angle) * force * 0.3;
            newOpacity = Math.min(1, (shape.opacity + 0.3) * pulse);
            newSize = shape.size * 1.3; // Grow when mouse is near
            
            // Keep shapes within bounds
            newX = Math.max(5, Math.min(95, newX));
            newY = Math.max(5, Math.min(95, newY));
          } else {
            // Use orbital position for natural movement
            newX = orbitX;
            newY = orbitY;
            newOpacity = shape.opacity * pulse;
            newSize = shape.size;
          }
          
          return {
            ...shape,
            x: newX,
            y: newY,
            opacity: Math.max(0.1, Math.min(1, newOpacity)),
            size: newSize,
            rotationX: shape.rotationX + shape.rotationSpeedX,
            rotationY: shape.rotationY + shape.rotationSpeedY,
            rotationZ: shape.rotationZ + shape.rotationSpeedZ,
            orbitAngle: newOrbitAngle,
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

  // Get shape-specific styles with enhanced interactivity
  const getShapeStyle = (shape: Shape3D) => {
    const baseOpacity = theme === 'dark' ? shape.opacity : shape.opacity * 0.8;
    const glowIntensity = theme === 'dark' ? '15px' : '8px';
    
    const baseStyle = {
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      background: shape.gradient,
      opacity: baseOpacity,
      transform: `translate(-50%, -50%) 
                  perspective(1000px) 
                  rotateX(${shape.rotationX + globalRotation * 0.3}deg) 
                  rotateY(${shape.rotationY + globalRotation * 0.5}deg) 
                  rotateZ(${shape.rotationZ + globalRotation * 0.2}deg)`,
      filter: `blur(0.5px) drop-shadow(0 0 ${glowIntensity} rgba(255, 255, 255, 0.4))`,
      transformStyle: 'preserve-3d' as const,
    };

    // Shape-specific modifications with enhanced white sphere styling
    switch (shape.type) {
      case 'sphere':
        return {
          ...baseStyle,
          borderRadius: '50%',
          boxShadow: theme === 'dark' 
            ? `0 0 30px rgba(255, 255, 255, 0.6), inset -10px -10px 20px rgba(0, 0, 0, 0.2)`
            : `0 0 25px rgba(255, 255, 255, 0.8), inset -5px -5px 15px rgba(0, 0, 0, 0.1)`,
          background: shape.gradient.includes('rgba(255,255,255') 
            ? 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.2) 100%)'
            : shape.gradient,
        };
      
      case 'cube':
        return {
          ...baseStyle,
          borderRadius: '6px',
          boxShadow: theme === 'dark' 
            ? `0 0 25px rgba(150, 200, 255, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1)`
            : `0 0 20px rgba(150, 200, 255, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.2)`,
        };
      
      case 'diamond':
        return {
          ...baseStyle,
          clipPath: 'polygon(50% 0%, 0% 50%, 50% 100%, 100% 50%)',
          boxShadow: theme === 'dark' 
            ? `0 0 25px rgba(255, 150, 200, 0.5)`
            : `0 0 20px rgba(255, 150, 200, 0.4)`,
        };
      
      case 'pyramid':
        return {
          ...baseStyle,
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          boxShadow: theme === 'dark' 
            ? `0 0 22px rgba(150, 255, 200, 0.5)`
            : `0 0 18px rgba(150, 255, 200, 0.4)`,
        };
      
      case 'dodecahedron':
        return {
          ...baseStyle,
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          boxShadow: theme === 'dark' 
            ? `0 0 28px rgba(255, 200, 150, 0.5)`
            : `0 0 22px rgba(255, 200, 150, 0.4)`,
        };
      
      default:
        return baseStyle;
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ 
        pointerEvents: 'none',
        transform: `rotate(${globalRotation * 0.1}deg)`,
        transformOrigin: 'center center'
      }}
    >
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute transition-all duration-500 ease-out cursor-pointer hover:scale-110"
          style={getShapeStyle(shape)}
        />
      ))}
      
      {/* Additional rotating background layer */}
      <div 
        className="absolute inset-0"
        style={{
          transform: `rotate(${globalRotation * -0.05}deg)`,
          transformOrigin: 'center center'
        }}
      >
        {/* Subtle rotating gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-500/5 to-purple-500/10 animate-pulse" />
      </div>
    </div>
  );
};
