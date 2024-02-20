import  { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsData } from '../../AllProductsData';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../Store/Slices/cartSlice'
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];
  const ProductData = ProductsData[pathname];

  //const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { product_id } = useParams();

  // Find the product with the matching id
  const product = ProductData.find((product) => product.product_id === product_id);

  // console.log(product.product_photos[0])

  // If the product is not found, you can handle it as per your requirement
  if (!product) {
    return <div>Product not found</div>;
  }

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <div className="grid grid-cols-3 gap-4">
            {product.product_photos && product.product_photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Product Photo ${index}`}
                className={`h-[100px] w-[100px] object-cover rounded-md cursor-pointer ${
                  index === selectedPhotoIndex ? 'border-2 border-blue-500' : ''
                }`}
                onClick={() => handlePhotoClick(index)}
              />
            ))}
          </div>
          {product.product_photos && (
            <img
              src={product.product_photos[selectedPhotoIndex]}
              alt={product.product_title}
              className="h-[500px] w-[400px] object-cover rounded-md mt-4"
            />
          )}
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold mb-4">{product.product_title}</h2>
          <div className="flex items-center mb-4">
            <span className="text-gray-800 font-semibold mr-2">Price:</span>
            <span className="text-xl font-semibold text-blue-600">{product.offer.price}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-800 font-semibold mr-2">Discount:</span>
            <span className="text-xl font-semibold text-blue-600">{product.offer.discount}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-800 font-semibold mr-2">Real Price:</span>
            <span className="text-xl font-semibold text-blue-600">{product.offer.real_price}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-800 font-semibold mr-2">Size:</span>
            <span className="text-xl font-semibold text-blue-600">{product.product_attributes.Size}</span>
          </div>
          <div className="border rounded-md p-4 mb-4">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <div className="text-gray-600">
              {product.product_description.split('.').map((paragraph, index) => (
                <p key={index} className="mb-2">{paragraph}</p>
              ))}
            </div>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mr-4"  
            onClick={() => dispatch(addToCart({
              title: product.product_title,
              id: product.product_id,
              price: parseInt(product.offer.price.replace("₹", "").replace(",", "")),
              img: product.product_photos[0]
            }))}
          >
            Add to Cart
          </button>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
            
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
