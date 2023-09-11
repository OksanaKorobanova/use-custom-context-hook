'use client';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const Header = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider'
    );
  }
  const { theme } = context;
  return (
    <header
      style={{
        backgroundColor: theme === 'light' ? 'blue' : 'black',
        color: 'white',
      }}>
      {theme}
    </header>
  );
};

export default Header;
