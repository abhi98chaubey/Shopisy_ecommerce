// Cart.js
import React, { useState } from 'react';
import Image1 from "../assets/hero/women.png";
import Image2 from "../assets/hero/shopping.png";
//import { UseDispatch, useDispatch, useSelector } from 'react-redux';
//import { addItem, deleteItem, increaseQuantity, decreaseQuantity } from '../Store/Slices/cartSlice';

const Cart = () => {
    // const items=useSelector((state)=> state.cart.items );
    // const dispatch=useDispatch();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 200.00, quantity: 2, img: Image1 },
    { id: 2, name: 'Product 2', price: 1500.00, quantity: 1, img: Image2 },
    // Add more items as needed
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <div data-aos="fade-up" className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="bg-blue p-4 rounded shadow mb-4 flex items-center">
          <img src={item.img} alt={item.name} className="w-16 h-16 object-cover mr-4" />
          <div className="flex-grow"> {/* Use flex-grow to make it take the remaining space */}
            <p className="text-center">{item.name}</p>
            <p className=" text-white px-2 py-1 ">Rs {item.price.toFixed(2)} * {item.quantity}</p>
          </div>
          <div className="flex items-center">
            
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => decreaseQuantity(item.id)}
              >
              -
            </button>
                <span className="bg-green-500 text-white px-3 py-1 rounded mr-2 ml-2">{item.quantity}</span>

            <button
              className="bg-green-500 text-white px-2 py-1 rounded mr-2"
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <p className="text-lg font-semibold">Total: Rs {calculateTotal()}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 text-center">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
