
import React from 'react';

interface ResponsiveSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({
  children,
  className = '',
  id,
  fullWidth = false
}) => {
  return (
    <section 
      id={id} 
      className={`section-padding ${fullWidth ? 'w-full' : 'responsive-container'} ${className}`}
    >
      {children}
    </section>
  );
};

export default ResponsiveSection;
