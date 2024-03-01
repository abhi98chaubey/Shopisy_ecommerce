
import { ProductsData } from '../AllProductsData';
import CategoryProduct from '../components/Products/CategoryProduct';

function Mens_Shoes() {
  const ProductData = ProductsData.Men_ShoesData;
  //console.log(ProductData);
  return (
    <CategoryProduct ProductData={ProductData} />
  );
}

export default Mens_Shoes;
