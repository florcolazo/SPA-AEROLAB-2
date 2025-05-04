import Header from '../templates/Header';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
<<<<<<< HEAD
import getData from '../utils/getData';
=======
>>>>>>> c37aba7900268ff024eeba3d97e588e56aabd80e

const routes = {
  '/': Home,
  '/:id': Product,
<<<<<<< HEAD
  '/about': 'about',
};

const router = async () => {
  
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  let fullHash = location.hash.slice(1).toLocaleLowerCase();
  console.log('fullHash:', fullHash);
  let route = await resolveRoutes(fullHash);
  console.log('route:', route);
  let render = routes[route] ? routes[route] : Error404;

  // Fetch products data
  let products = await getData();

  // Extract id from fullHash if route is '/:id'
  let id = null;
  if (route === '/:id') {
    id = fullHash.split('/')[1];
    console.log('extracted id:', id);
  }
  
  content.innerHTML = await render(products, id);
=======
  '/contact': 'Contact',
};

const router = async () => {
  const header = null || 
document.getElementById('header');
  const content = null || 
document.getElementById('content');

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await 
resolveRoutes(hash);
  console.log(route)
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
>>>>>>> c37aba7900268ff024eeba3d97e588e56aabd80e
};

export default router;