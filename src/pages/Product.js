import getHash from '../utils/getHash';
import getData from '../utils/getData';
import Error404 from './Error404';




const Product = async (Products) => {

  const id = getHash();
  const products = await getData();
  
  const { img, name,category,cost} = products;

  const view = products? `
    <section class="Product-inner">
      <article class="Product-card">
        <img src="${products.img}" alt="${products.name}">
        <h2>${products.name}</h2>
      </article>
      <article class="Prodcuct-card">
        <h3>Categoria: ${products.category}</h3>
        <h3>Costo: ${products.cost}</h3>

        
      </article>
    </div>
  `
  : Error404();
  return view;
};


export default Product;