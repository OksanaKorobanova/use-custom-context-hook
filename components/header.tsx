'use client';
import { useThemeContext } from '../context/themeContext';

const Header = () => {
  const { theme } = useThemeContext();
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
