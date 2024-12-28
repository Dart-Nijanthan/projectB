import { Route, Router, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import BookShipment from './pages/bookShipment';
import ScrollToTop from './components/scrollToTop';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='book-shipment' element={<BookShipment />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
