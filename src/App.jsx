import React from "react";
import Navbar from "./components/Navbar/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { Route, Routes } from "react-router-dom";
import Manswear from "./pages/Manswear"
import Girlswear from "./pages/Girlswear"
import Kids from "./pages/Kids"
import TopRated from "./pages/TopRated"
import Home from "./pages/Home";
import Carts from "./pages/Carts";
import Productdetails from "./components/Productdetails/Productdetails";
const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
    
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/carts" element={<Carts/>}/>
        <Route path="/product/:id" element={<Productdetails/>}/>
        <Route path="/toprated" element={<TopRated></TopRated>} />
        <Route path="/girlswear" element={<Girlswear></Girlswear>} />
        <Route path="/manswear" element={<Manswear></Manswear>} />
        <Route path="/kids" element={<Kids></Kids>}/>     
    </Routes>
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
   
    </>
  );
};

export default App;
