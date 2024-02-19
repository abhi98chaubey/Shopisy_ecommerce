import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown, FaBars } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Menu = [
  {
    id: 10,
    name: "Home",
    link: "/",
  },
  {
    id: 20,
    name: "Women T-shirts",
    link: "/Women_tshirtData",
  },
  {
    id: 30,
    name: "Men Shirts",
    link: "/Men_sirtData",
  },
  {
    id: 40,
    name: "Men Shoes",
    link: "/Men_ShoesData",
  },
  {
    id: 50,
    name: "Women Shoes",
    link: "/Women_shoesData",
  },
  {
    id: 60,
    name: "Men T-shirts",
    link: "/Men_Tshirt",
  },
  {
    id: 70,
    name: "Women Shirts",
    link: "/Women_shirtData",
  },
  {
    id: 90,
    name: "Men Jeans",
    link: "/Men_JeansData",
  },
  {
    id: 100,
    name: "Women Jeans",
    link: "/Women_JeansData",
  },
];

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const Navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <div className="sticky top-0 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2"
            >
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              onClick={() => Navigate("/carts")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group relative"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <div className="relative">
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />

                {/* Add a badge or counter for cart items */}

                <span className="bg-red-500 text-white rounded-full px-2 py-1 absolute -top-2 -right-3 text-xs transform scale-75">
                  {getTotalQuantity() || 0}
                </span>
              </div>
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Menu for Mobile View */}
      <div className="sm:hidden flex justify-end pr-4">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-2xl text-gray-600 focus:outline-none"
        >
          {showMenu ? <FaCaretDown /> : <FaBars />}
        </button>
      </div>

      {/* Dropdown Menu for Mobile View */}
      {showMenu && (
        <div className="sm:hidden bg-white dark:bg-gray-900 absolute top-16 w-full left-0 z-50 shadow-md">
          <ul className="flex flex-col items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 py-2 hover:text-primary duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
