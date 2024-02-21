import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Productdetails, Home, Carts, Women_Jeans, Women_Shoes, Women_Shirts, Women_Tshirt, Men_Shirts, Men_Tshirts, Mens_Jeans, Mens_Shoes, SearchPage, Footer, Popup, Navbar } from './index';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const handleOnError = (error, errorInfo) => {
    console.error('Error caught by error boundary:', error, errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>} onError={handleOnError}>
      {children}
    </Suspense>
  );
};

const App = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carts" element={<Carts />} />
        <Route path={`/${pathname}/product/:product_id`} element={<Productdetails />} />
        <Route path="/Men_sirtData" element={<Men_Shirts />} />
        <Route path="/SearchPage/:search?" element={<SearchPage />} />
        <Route path="/Men_Tshirt" element={<Men_Tshirts />} />
        <Route path="/Men_ShoesData" element={<Mens_Shoes />} />
        <Route path="/Men_JeansData" element={<Mens_Jeans />} />
        <Route path="/Women_JeansData" element={<Women_Jeans />} />
        <Route path="/Women_shirtData" element={<Women_Shirts />} />
        <Route path="/Women_shoesData" element={<Women_Shoes />} />
        <Route path="/Women_tshirtData" element={<Women_Tshirt />} />
      </Routes>
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default function AppWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
