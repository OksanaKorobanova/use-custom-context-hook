import Header from '../../components/header';
import Selector from '../../components/selector';
import ThemeContextProvider from '../../context/themeContext';

export default function Home() {
  return (
    <ThemeContextProvider>
      <>
        <Header />
        <Selector />
      </>
    </ThemeContextProvider>
  );
}
