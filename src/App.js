import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary'; // Create an error boundary component
import Loader from './components/Loader'; // Create a Loader component for suspense fallback

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const BookShipment = lazy(() => import('./pages/BookShipment'));
const NotFound = lazy(() => import('./pages/NotFound')); // Create a NotFound page for 404s

const App = () => (
  <Router>
    <Header />
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-shipment" element={<BookShipment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
    <Footer />
  </Router>
);

export default App;
