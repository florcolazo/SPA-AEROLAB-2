
const token=  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM3MzYwNmQ0N2E1NjAwMjFkZDc3ODMiLCJpYXQiOjE2NjQ1NjI2OTR9.QsXFINcyCncRxhJ-n6Zn1lP0yu8XRmQ1RCRu9uy1dm0';

const API = `https://coding-challenge-api.aerolab.co/products?token=${token}`;
const getProduct =  async (id)=>{


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

  }catch (error){
    console.log("Fetch Error",error)
  }
}



export default getProduct;
