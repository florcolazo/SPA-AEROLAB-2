const Header = () => {
    const view = `
      <div class="Header-main"
        <div class="Header-logo">
        
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
    </div>
    `;
    return view;
  };
  
  export default Header;