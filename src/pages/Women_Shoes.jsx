import CategoryProduct from '../components/Products/CategoryProduct';
import {ProductsData} from '../AllProductsData'


function Women_Shoes() {
    const ProductData= ProductsData.Women_shoesData;
  
  return (
    <CategoryProduct ProductData={ProductData} />
    
  )
}

export default Women_Shoes;

