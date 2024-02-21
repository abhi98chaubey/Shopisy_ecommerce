import React, { Suspense } from 'react';

const Productdetails = React.lazy(() => import("./components/Productdetails/Productdetails"));
const Home = React.lazy(() => import("./pages/Home"));
const Carts = React.lazy(() => import("./pages/Carts"));
const Women_Jeans = React.lazy(() => import("./pages/Women_Jeans"));
const Women_Shoes = React.lazy(() => import("./pages/Women_Shoes"));
const Women_Shirts = React.lazy(() => import("./pages/Women_Shirts"));
const Women_Tshirt = React.lazy(() => import("./pages/Women_Tshirt"));
const Men_Shirts = React.lazy(() => import("./pages/Men_Shirts"));
const Men_Tshirts = React.lazy(() => import("./pages/Men_Tshirts"));
const Mens_Jeans = React.lazy(() => import("./pages/Men_Jeans"));
const Mens_Shoes = React.lazy(() => import("./pages/Men_Shoes"));
const SearchPage = React.lazy(() => import("./pages/SearchPage"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));
const Popup = React.lazy(() => import("./components/Popup/Popup"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));

export {
    Productdetails,
    Home,
    Carts,
    Women_Jeans,
    Women_Shoes,
    Women_Shirts,
    Women_Tshirt,
    Men_Shirts,
    Men_Tshirts,
    Mens_Jeans,
    Mens_Shoes,
    SearchPage,
    Footer,
    Popup,
    Navbar
};


