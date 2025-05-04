<<<<<<< HEAD
import Error404 from './Error404';
import getProduct from '../utils/getProduct';

const Product = async (Products, id) => {
  const product = await getProduct(id);

  if (!product) return Error404();

  const { img, name, category, cost } = product;

  const view = `
    <div class="product-detail">
      <h1 class="product-title">Challenger Aereolab</h1>
      <div class="product-content">
        <img class="product-img" src="${img.url}" alt="${name}">
        <div class="product-info">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Cost:</strong> $${cost}</p>
        </div>
      </div>
    </div>
  `;
  return view;
};

export default Product;



=======
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
>>>>>>> c37aba7900268ff024eeba3d97e588e56aabd80e
