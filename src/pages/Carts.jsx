import { useSelector } from 'react-redux';
import CartItem from '../components/CartItems';

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const calculateShippingCharge = (totalPrice) => {
    return totalPrice < 500 ? 59 : 0;
  };

  const total = getTotal();
  const shippingCharge = calculateShippingCharge(total.totalPrice);

  const remainingForFreeDelivery = total.totalPrice < 500 ? 500 - total.totalPrice : null;

  return (
    <div data-aos="fade-up" className="container mx-auto mt-8 flex flex-col lg:flex-row mb-10">
      <div className="w-full lg:w-3/4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        {cart?.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.img}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className=" w-full lg:w-1/4 mt-4 lg:mt-0 lg:ml-8">
        <div className="text-center">
          <p className="total__p">
            Total ({total.totalQuantity} items) : <strong>Rs {total.totalPrice}</strong>
          </p>
          <p className="shipping__p">
            Shipping Charge: <strong>Rs {shippingCharge}</strong>
          </p>
          {remainingForFreeDelivery !== null && (
            <p className="text-red-500">
              Add Rs {remainingForFreeDelivery} more for free delivery
            </p>
          )}
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 text-center">
            Checkout (Rs {total.totalPrice + shippingCharge})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;