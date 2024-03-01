import CategoryProduct from '../components/Products/CategoryProduct';
import { ProductsData } from '../AllProductsData'


function Men_Jeans() {

  const ProductData= ProductsData.Men_JeansData;

  return (
    <CategoryProduct ProductData={ProductData} />
    
  )
}

export default Men_Jeans;
