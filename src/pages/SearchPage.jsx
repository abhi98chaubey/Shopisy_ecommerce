import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Store/Slices/cartSlice';
import { useLocation } from "react-router-dom";

function SearchPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const product = searchParams.get('search');
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: apiUrl,
        params: {
          q: product,
          country: 'IN',
          language: 'en'
        },
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [apiUrl, apiKey, product]);

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {products && products.data.map((data) => (
              <div
                data-aos="fade-up"
                
                key={data.product_id} // Use product_id as the key
                className="space-y-3"
              >
                {/* <button onClick={() => Navigate(`/product/${data.product_id}`)}> */}
                  <img
                    src={data.product_photos['0']}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                {/* </button> */}
                <div>
                  <h3 className="font-semibold">{data.product_title}</h3>
                  <p className="text-sm text-gray-600">{}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.product_rating}</span>
                    <span className="ml-4 "> Rs {data.offer.price}</span>
                  </div>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={() => dispatch(addToCart({ title: data.product_title, id: data.product_id, price: parseInt(data.offer.price.replace("₹", "").replace(",", "")), img: data.product_photos['0'] }))}
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
        </div>
      </div>
    </div>
  )
}

export default SearchPage;
