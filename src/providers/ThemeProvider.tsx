
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// This interface matches the shape of next-themes useTheme hook
interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  resolvedTheme?: string;
  systemTheme?: string;
  themes?: string[];
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');
  
  // Add support for system preference detection
  const [systemTheme, setSystemTheme] = useState<string | undefined>(undefined);
  
  useEffect(() => {
    // Check for system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
    
    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  const value = {
    theme,
    setTheme,
    resolvedTheme: theme,
    systemTheme,
    themes: ['light', 'dark'],
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
