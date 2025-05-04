<<<<<<< HEAD
import imgEncabezado from '../assets/images/header-x2.png'
import aerolabLogo from '../assets/images/aerolab-logo.svg'
import coin from '../assets/icons/coin.svg'


const Header = () =>{
  const view = `
      <div class = "Header-main">
          <div class = "Header-icons-container">
              <div class = "Icons">
                  <img src = ${aerolabLogo} alt = "logo-encabezado">
              </div>
              <div class = "containerUser">
              <span class = "user">Florencia Colazo</span>
                  <div class = "containerCoin">
                      <span class = "coin">2575</span>
                      <img src = ${coin} alt = "coin">
                  </div>
              </div>
          </div>
          <div class = "Header-encabezado" id="Fondo">
              <img src = ${imgEncabezado} alt = "img-encabezado">
              <h1>
                  <a href = "/">Electronics</a>
              </h1> 
          </div>
          <div class = "Header-nav">
              <a href = "#/about">
              </a>
          </div>
          
      </div>
  `
  return view 
}

export default Header;
=======
const Header = () => {
    const view = `
      <div className="Header-main"
        <div className="Header-logo"> 
          <img src="assets/images/aerolab-logo-svg alt ""/>
          <h1>
            <a href="#">
            <i class="fas fa-home"></i>
            Electronics
            </a>
          </h1>
        </div>
        <div class ="nav-right-section">
          <a href = "/"><span class = "logo"></span></a>
          <a href = "/"><span class = "money"></span></a>
          <a href = "/"><span class = "user"></span></a>
          
          
         
  
          </h1>
        </div>
        <div class="Header-nav">
          <a href="#/about/">About</a>
        </div>
      
            
      </div>
      </div>
    <div class = "Header-encabezado" id="Fondo">
      <img src='../assets/images/Header-x1.png' alt ='imgEncabezado'/>
      
    </div>
    `;
    return view;
  };
  
  export default Header;
>>>>>>> c37aba7900268ff024eeba3d97e588e56aabd80e
