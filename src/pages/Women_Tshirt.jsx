import CategoryProduct from '../components/Products/CategoryProduct';
import { ProductsData } from '../AllProductsData';


function Women_Tshirt() {
  const ProductData = ProductsData.Women_tshirtData;
  

  return (
    <CategoryProduct ProductData={ProductData} />

  )
}

export default Women_Tshirt;
