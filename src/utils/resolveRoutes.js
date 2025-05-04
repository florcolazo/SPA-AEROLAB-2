const resolveRoutes = (route) => {
  if (!route || route === '') {
    return '/';
  }
  if (route.length <= 32) {
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }
  return `/${route}`
};

export default resolveRoutes;
