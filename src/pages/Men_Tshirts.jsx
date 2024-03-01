import {ProductsData} from '../AllProductsData'
import CategoryProduct from '../components/Products/CategoryProduct';

 function Men_Tshirts() {
    const ProductData= ProductsData.Men_Tshirt;
  
  return (
    <CategoryProduct ProductData={ProductData} />
    
  )
}

export default Men_Tshirts;