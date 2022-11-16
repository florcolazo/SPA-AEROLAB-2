import getHash from '../utils/getHash';

import Error404 from './Error404';
import getProduct from '../utils/getProduct';




const Product = async (Products) => {

  const id = getHash();
  const products = await getProduct(id);
  
  const { img, name,category,cost} = products;

  const view = products? `
    <section class="Products-inner">
      <article class="Products-card">
        
        <img src="${img}" alt="${name}">
        <h2>${category}</h2>
      </article>
      <article class="Products-card">
        <h3>Categoria: ${category}</h3>
        <h3>Costo: ${cost}</h3>

        
      </article>
    </div>
  `
  : Error404();
  return view;
};


export default Product;