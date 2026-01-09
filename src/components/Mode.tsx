import React, { createContext, useState, useContext, type ReactNode } from 'react';

interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
  background: string;
  backgroundAlt: string;
  text: string;
  textSecondary: string;
  textButton: string;
  border: string;
  hover: string;
  gradient: string;
  card: string;
  cardBorder: string;
  input: {
    bg: string;
    border: string;
    focus: string;
  };
  button: {
    primary: string;
    secondary: string;
  };
  link: string;
  ring: string;
  mobileMenu: string;
}

interface ModeProps {
  children: ReactNode;
}

const ThemeContext = createContext<Theme | undefined>(undefined);

export const Mode: React.FC<ModeProps> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(true);

  const toggleTheme = () => setIsDark(!isDark);

  const theme: Theme = {
    isDark,
    toggleTheme,
    background: isDark ? 'bg-gray-900' : 'bg-white',
    backgroundAlt: isDark ? 'bg-gray-800' : 'bg-gray-50',
    text: isDark ? 'text-white' : 'text-gray-900',
    textSecondary: isDark ? 'text-gray-400' : 'text-gray-600',
    textButton: isDark ? 'text-gray-200' : 'text-gray-600',
    border: isDark ? 'border-white/10' : 'border-gray-200',
    hover: isDark ? 'hover:bg-white/5' : 'hover:bg-gray-100',
    gradient: isDark ? 'from-emerald-400 to-teal-500' : 'from-amber-400 to-yellow-500',
    card: isDark ? 'bg-gray-800' : 'bg-white',
    cardBorder: isDark ? 'border-gray-700' : 'border-gray-200',
    input: {
      bg: isDark ? 'bg-white/5' : 'bg-white',
      border: isDark ? 'outline-white/10' : 'outline-gray-300',
      focus: isDark ? 'focus:outline-emerald-500' : 'focus:outline-emerald-600',
    },
    button: {
      primary: isDark ? 'bg-emerald-500 hover:bg-emerald-400' : 'bg-emerald-600 hover:bg-emerald-500',
      secondary: isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300',
    },
    link: isDark ? 'text-emerald-400' : 'text-emerald-600',
    ring: isDark ? 'ring-white/10' : 'ring-gray-900/10',
    mobileMenu: isDark ? 'bg-gray-900' : 'bg-white',
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={isDark ? 'dark' : 'light'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a Mode provider');
  }
  return context;
};

export default ThemeContext;