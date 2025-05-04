
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


