
const token=  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM3MzYwNmQ0N2E1NjAwMjFkZDc3ODMiLCJpYXQiOjE2NjQ1NjI2OTR9.QsXFINcyCncRxhJ-n6Zn1lP0yu8XRmQ1RCRu9uy1dm0';

const API = `https://coding-challenge-api.aerolab.co/products?token=${token}`;
const getProduct =  async (id)=>{

<<<<<<< HEAD
  console.log('getProduct called with id:', id);
  try{
    const response = await fetch(API)
    const data = await response.json()
    if (id) {
      const product = data.find(item => item._id === id);
      if (!product) {
        console.log('No product found with id:', id);
        return null;
      }
      return product;
    }
    return data;
=======
  const apiURL = id ?`${API}${id}` : API
  try{
    const response = await fetch(apiURL)
    const data = await response.json()
    return data
>>>>>>> c37aba7900268ff024eeba3d97e588e56aabd80e
  }catch (error){
    console.log("Fetch Error",error)
  }
}


<<<<<<< HEAD
export default getProduct;
=======
export default getProduct;
>>>>>>> c37aba7900268ff024eeba3d97e588e56aabd80e
