import { Outlet } from 'react-router-dom';
import Header from './HeaderNav'; // rename to Navbar
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
