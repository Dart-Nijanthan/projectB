import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navBar';
import Footer from '../../components/footer';

const Layout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
