'use client';
import { useThemeContext, THEME_COLOR } from '../context/themeContext';

const Selector = () => {
  const { setTheme } = useThemeContext();

  const setLightTheme = (): void => {
    setTheme(THEME_COLOR.LIGHT);
  };

  const setDarkTheme = (): void => {
    setTheme(THEME_COLOR.DARK);
  };

  return (
    <>
      <button
        onClick={
          setLightTheme
        }>{`Set ${THEME_COLOR.LIGHT} color scheme`}</button>
      <button
        onClick={setDarkTheme}>{`Set ${THEME_COLOR.DARK} color scheme`}</button>
    </>
  );
};

export default Selector;
