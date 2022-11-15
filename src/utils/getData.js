const token=  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM3MzYwNmQ0N2E1NjAwMjFkZDc3ODMiLCJpYXQiOjE2NjQ1NjI2OTR9.QsXFINcyCncRxhJ-n6Zn1lP0yu8XRmQ1RCRu9uy1dm0';
const API = `https://coding-challenge-api.aerolab.co/products?token=${token}`;


const getData = async (id) => {
  
  const apiURl = id ? `${API}${id}` : API; //si no existe ese id trae todos los id de la API
    
  try {
    const response = await fetch(apiURl); //AWAIT ESPERA A QUE ESTO SUCEDA

    const data = await response.json();
    return data; //SI TODO ES CORRECTO RETORNA LA DATA
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getData;