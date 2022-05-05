import { Outlet } from 'react-router-dom';
import Header from './HeaderNav'; // rename to Navbar
import Footer from './Footer';
import { Main } from './Stack';
import { ThemeProvider } from './ThemeProvider';

export default function Layout() {
  return (
    <ThemeProvider>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </ThemeProvider>
  );
}
