import {ProductsData} from '../AllProductsData'

import CategoryProduct from '../components/Products/CategoryProduct';
function Manswear() {
 
  const ProductData= ProductsData.Men_Tshirt;
   
  return (
    <CategoryProduct ProductData={ProductData} />
  )
}


export default Manswear