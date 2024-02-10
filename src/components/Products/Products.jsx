
import { FaStar } from "react-icons/fa6";
 import { useDispatch, useSelector } from 'react-redux';
// import { addItem } from '../../Store/Slices/cartSlice';
import { ProductsData } from '../../ProductsData';
import { addToCart} from '../../Store/Slices/cartSlice'
import Productdetails from "../Productdetails/Productdetails";
import { useNavigate } from "react-router-dom";




const Products = () => {
  const Navigate = useNavigate();
  const dispatch=useDispatch();
//   function addinCart(data){
//     dispatch(add(data));
//     console.log("add ho gaya");

// }
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Discover the Best! Shop Top Selling Products Tailored Just for You.
          </p>
        </div>
        {/* Body section */}
        <div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
              <button onClick={() => Navigate(`product/${data.id}`)}>
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  </button>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                    <span className="ml-4 ">Rs {data.price}</span>
                  </div>
                  <button
  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
  onClick={() => dispatch(addToCart({title: data.title, id: data.id, price: data.price, img: data.img}))}
>
  Add to Cart
</button>
{/* <button
  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
  onClick={() => Navigate(`product/${data.id}`)}
>
  Details
</button> */}
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md" 
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
