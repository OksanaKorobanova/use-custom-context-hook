'use client';

import React, { createContext, useState, useContext } from 'react';

export enum THEME_COLOR {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeColorScheme = THEME_COLOR.LIGHT | THEME_COLOR.DARK;

type ThemeContext = {
  theme: ThemeColorScheme;
  setTheme: React.Dispatch<React.SetStateAction<ThemeColorScheme>>;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<ThemeColorScheme>(THEME_COLOR.LIGHT); // default

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider'
    );
  }

  return context;
}
