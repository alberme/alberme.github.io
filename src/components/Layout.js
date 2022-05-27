import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './HeaderNav'; // rename to Navbar
import Footer from './Footer';
import { Main } from './Stack';
import { ThemeProvider } from './ThemeProvider';

export default function Layout() {
  const [scrollBarAtTop, setScrollBarAtTop] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      setTimeout(() => {
        setScrollBarAtTop(Math.ceil(window.scrollY) === 0);
      }, 100);
    };

    return () => {
      window.onscroll = null
    };
  }, []);
  
  return (
    <ThemeProvider>
      <Header shrink={!scrollBarAtTop}/>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </ThemeProvider>
  );
}