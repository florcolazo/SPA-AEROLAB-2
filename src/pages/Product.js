import getHash from '../utils/getHash';
import getData from '../utils/getData';
import Error404 from './Error404';



const Product = async (Products) => {

  const id = getHash();
  const product = await getData(id);
  console.log(product);
  const { img, name,category,cost} = product;

  const view = product? `
    <section class="Product-inner">
      <article class="Product-card">
        <img src="${product.img}" alt="${product.name}">
        <h2>${product.name}</h2>
      </article>
      <article class="Prodcuct-card">
        <h3>Categoria: ${product.category}</h3>
        <h3>Costo: ${product.cost}</h3>

        
      </article>
    </div>
  `
  : Error404();
  return view;
};


export default Product;