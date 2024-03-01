import CategoryProduct from '../components/Products/CategoryProduct';
import {ProductsData} from '../AllProductsData'

function Women_Shirts() {
    const ProductData= ProductsData.Women_shirtData;
 
  return (
    <CategoryProduct ProductData={ProductData} />

  )
}



export default Women_Shirts;