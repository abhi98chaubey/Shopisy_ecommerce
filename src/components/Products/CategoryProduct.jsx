import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/Slices/cartSlice';
import { useNavigate } from "react-router-dom";

function CategoryProduct({ ProductData }) {
 // const { ProductData } = props;
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  //console.log(ProductData)

  // Check if ProductData is an array before using map
  if (!Array.isArray(ProductData)) {
    return null; // or render a loading indicator, error message, etc.
  }

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductData.map((data) => (
              <div
                data-aos="fade-up"
                key={data.product_id}
                className="space-y-3"
              >
                <button onClick={() => Navigate(`product/${data.product_id}`)}>
                  <img
                    src={data.product_photos?.['0']}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                </button>
                <div>
                  <h3 className="font-semibold">{data.product_title}</h3>

                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.product_rating}</span>
                    <span className="ml-4"> Rs {data.offer?.price}</span>
                  </div>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          title: data.product_title,
                          id: data.product_id,
                          price: parseInt(
                            data.offer?.price?.replace('₹', '')?.replace(',', '')
                          ),
                          img: data.product_photos?.['0'],
                          quantity: 1, // Add quantity property
                        })
                      )
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryProduct;
