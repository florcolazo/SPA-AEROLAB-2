const resolveRoutes = (route) => {
<<<<<<< HEAD
  if (!route || route === '') {
    return '/';
  }
=======
>>>>>>> c37aba7900268ff024eeba3d97e588e56aabd80e
  if (route.length <= 32) {
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }
  return `/${route}`
};

<<<<<<< HEAD
export default resolveRoutes;
=======
export default resolveRoutes;
>>>>>>> c37aba7900268ff024eeba3d97e588e56aabd80e
