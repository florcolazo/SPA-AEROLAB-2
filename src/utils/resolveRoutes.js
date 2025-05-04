const resolveRoutes = (route) => {
  if (!route || route === '') {
    return '/';
  }
  if (route === 'about') {
    return '/about';
  }
  // For any other route, assume it's a product id route
  return '/:id';
};

export default resolveRoutes;
