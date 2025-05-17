import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export function useDarkMode(): [Theme, () => void] {
  // Check if user has a preference stored in localStorage
  const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPreference = window.localStorage.getItem('theme');
      if (storedPreference) {
        return storedPreference as Theme;
      }
      
      // Check for user preference via OS settings
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
    }
    
    // Default to light theme
    return 'light';
  };
  
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  // Update the HTML data-theme attribute and localStorage when theme changes
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  return [theme, toggleTheme];
}