import CategoryProduct from '../components/Products/CategoryProduct';
import {ProductsData} from '../AllProductsData'


 function Men_Shirts() {
   
    const ProductData= ProductsData.Men_sirtData;
  
  return (
    <CategoryProduct ProductData={ProductData} />
    
  )
}

export default Men_Shirts;