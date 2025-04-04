
import { useState, useEffect } from 'react';

interface Breakpoints {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xxl: boolean;
}

const defaultBreakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536
};

export const useResponsive = (): Breakpoints => {
  const [breakpoints, setBreakpoints] = useState<Breakpoints>({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setBreakpoints({
        xs: width >= defaultBreakpoints.xs,
        sm: width >= defaultBreakpoints.sm,
        md: width >= defaultBreakpoints.md,
        lg: width >= defaultBreakpoints.lg,
        xl: width >= defaultBreakpoints.xl,
        xxl: width >= defaultBreakpoints.xxl
      });
    };

    // Initial calculation
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoints;
};

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial calculation
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return isMobile;
};

export const useIsTablet = (): boolean => {
  const { md, lg } = useResponsive();
  return md && !lg;
};

export const useIsDesktop = (): boolean => {
  const { lg } = useResponsive();
  return lg;
};
