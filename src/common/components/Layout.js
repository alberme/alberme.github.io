import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderNav as Header, Footer, Theme } from 'common/components'; // rename to Navbar
import { Main } from 'common/styles/page';

export default function Layout() {
  const [scrollBarAtTop, setScrollBarAtTop] = useState(true);

  useEffect(() => {
    const checkScrollBarAtTop = () => {
      setTimeout(() => {
        setScrollBarAtTop(Math.ceil(window.scrollY) === 0);
      }, 100);
    };
    window.addEventListener('scroll', checkScrollBarAtTop);

    return () => {
      window.removeEventListener('scroll', checkScrollBarAtTop);
    };
  }, []);

  return (
    <Theme.ThemeProvider>
      <Header shrink={!scrollBarAtTop} />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Theme.ThemeProvider>
  );
}
