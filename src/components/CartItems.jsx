import { incrementQuantity, decrementQuantity, removeItem } from '../Store/Slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrash } from 'react-icons/fa'

function CartItem({ id, image, title, price, quantity = 0 }) {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  if (cart.length === 0) {
    return (
      <div className="flex items-center border-b border-gray-200 py-4">
        <p className="text-lg font-semibold">Empty Cart</p>
        <FaTrash className="text-red-500 ml-4 font-semibold" />
      </div>
    )
  }

  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <img className="w-24 h-24 object-cover mr-4" src={image} alt='item' />
      <div className="flex flex-grow items-center">
        <div className="flex text-center flex-col flex-grow">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-gray-500 mt-1">
            <span className="font-semibold">Rs </span>
            <span className="">{price}</span>
          </p>
        </div>
        <div className='flex items-center ml-auto'>
          <button
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l"
            onClick={() => dispatch(decrementQuantity(id))}
          >
            -
          </button>
          <p className="px-4">{quantity}</p>
          <button
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r"
            onClick={() => dispatch(incrementQuantity(id))}
          >
            +
          </button>
          <button
            className='text-red-500 ml-4 font-semibold'
            onClick={() => dispatch(removeItem(id))}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
