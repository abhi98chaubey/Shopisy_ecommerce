import CategoryProduct from '../components/Products/CategoryProduct';
import {ProductsData} from '../AllProductsData'


function Women_Jeans() {
    const ProductData= ProductsData.Women_JeansData;
 
  return (
    <CategoryProduct ProductData={ProductData} />
    
  )
}
export default Women_Jeans;


