import React from "react";
import Navbar from "./components/Navbar/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { Route, Routes, useParams } from "react-router-dom";
import Manswear from "./pages/Manswear"
import Girlswear from "./pages/Girlswear"
import Kids from "./pages/Kids"
import TopRated from "./pages/TopRated"
import Home from "./pages/Home";
import Carts from "./pages/Carts";
import Productdetails from "./components/Productdetails/Productdetails";

import Women_Jeans  from "./pages/Women_Jeans";
import  Women_Shoes  from "./pages/Women_Shoes";
import  Women_Shirts  from "./pages/Women_Shirts";
import  Women_Tshirt  from "./pages/Women_Tshirt";
import  Men_Shirts  from "./pages/Men_Shirts";
import  Men_Tshirts  from "./pages/Men_Tshirts";
import  Mens_Jeans  from "./pages/Men_Jeans";
import  Mens_Shoes  from "./pages/Men_Shoes";

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
        <Route path="/manswear/product/:product_id" element={<Productdetails/>}/>
        <Route path="/Men_Shirts" element={<Men_Shirts/>} />
        <Route path="/Men_Tshirts" element={<Men_Tshirts/>} />
        <Route path="/Men_Shoes" element={<Mens_Shoes/>} />
        <Route path="/Men_Jeans" element={<Mens_Jeans/>} />
        <Route path="/Women_Jeans" element={<Women_Jeans/>} />
        <Route path="/Women_Shirts" element={<Women_Shirts/>} />
        <Route path="/Women_Shoes" element={<Women_Shoes/>} />
        <Route path="/Women_Tshirts" element={<Women_Tshirt/>} />

        
    </Routes>
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
   
    </>
  );
};

export default App;
