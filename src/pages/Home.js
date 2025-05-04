import getData from '../utils/getData';

<<<<<<< HEAD
const Home = async () => {
  const products = await getData();
  const view = `<div class="Products">
=======
const Home = async (Products) => {
  const products = await getData();
  const view = `
    <div class="Products">
>>>>>>> c37aba7900268ff024eeba3d97e588e56aabd80e
      ${products.map(product => `
        <article class="Products-items">
        <a href="#/${product._id}/">
            <img src="${product.img.hdUrl}" alt="${product.img.hdUrl}">
<<<<<<< HEAD
            
            <h2>${product.name}</h2>
            
=======
            <h2>${product.category}</h2>
            <h2>${product.name}</h2>
            
             
>>>>>>> c37aba7900268ff024eeba3d97e588e56aabd80e
          </a>
        </article>
      `).join('')}
    </div>
  `;
  return view;
};

export default Home;