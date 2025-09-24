import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

const isValidTheme = (value: string): value is Theme => {
  return ['dark', 'light', 'system'].includes(value);
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored && isValidTheme(stored)) {
        setTheme(stored);
      }
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const setThemeValue = (theme: Theme) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
    setTheme(theme);
  };

  return { theme, setTheme: setThemeValue };
};