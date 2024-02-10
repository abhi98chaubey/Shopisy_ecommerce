// ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import {ProductsData} from '../../ProductsData';
import Desciption from './Desciption';

const ProductDetails = () => {
  const { id } = useParams();

  // Find the product with the matching id
  const product = ProductsData.find((product) => product.id === parseInt(id));

  // If the product is not found, you can handle it as per your requirement
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <img src={product.img} alt={product.title} className="h-[500px] w-[400px] object-cover rounded-md" />
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
          <h2 className="text-2xl font-semibold mb-4">Rating : {product.rating}</h2>

          <p className="text-gray-600 mb-4"><Desciption/></p>
          <div className="flex items-center mb-4">
            <span className="text-gray-800 font-semibold mr-2">Price:</span>
            <span className="text-xl font-semibold text-blue-600">Rs {product.price}</span>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
