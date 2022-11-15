(()=>{"use strict";const n="https://coding-challenge-api.aerolab.co/products?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM3MzYwNmQ0N2E1NjAwMjFkZDc3ODMiLCJpYXQiOjE2NjQ1NjI2OTR9.QsXFINcyCncRxhJ-n6Zn1lP0yu8XRmQ1RCRu9uy1dm0",a=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",s=()=>'\n      <div class="Error404">\n        <h2>Error 404</h2>\n      </div>\n    ',c={"/":async a=>`\n    <div class="Products">\n      ${(await(async a=>{const s=a?`${n}${a}`:n;try{const n=await fetch(s);return await n.json()}catch(n){console.log("Fetch Error",n)}})()).map((n=>`\n        <article class="Products-item">\n          <a href="#/${n._id}/">\n            <img src="${n.img.url}" alt="${n.img.hdUrl}">\n            <div class ="Product-item-description">\n            <p class= "Product-item-category">${n.category}</p>\n            <h2>${n.name}</h2>\n           \n             \n          </a>\n        </article>\n      `)).join("")}\n    </div>\n  `,"/:id":async n=>{const s=(n=>{const s=a();return n.find((n=>n._id===s?n:null))})(n);return console.log(s),s`
    <div class="Product-inner">
      <article class="Product-card">
        <img src="${s.img.url}" alt="${s.name}">
        <h2>${s.name}</h2> 
      </article>
      <article class="Product-details"> 
        // <h3>Categoria: <span>${s.category}</span></h3>
        // <h3>Costo: <span>${s.cost}</span></h3>
        
      </article>
    </div>
  `},"/contact":"Contact"},e=async()=>{const n=document.getElementById("header"),e=document.getElementById("content");n.innerHTML=await'\n      <div class="Header-main"\n        <div class="Header-logo">\n          <h1>\n            <href="/">Electronics</a>\n        \n        </div>\n        <div class ="nav-right-section">\n          <a href ="/">\n  \n          </h1>\n        </div>\n        <div class="Header-nav">\n          <a href="#/about/">About</a>\n        </div>\n        <div class = "Header-icons-container">\n          <div class = "Icons">\n            <a href = "/"><span class = "logo"></span></a>\n            <a href = "/"><span class = "money"></span></a>\n            <a href = "/"><span class = "user"></span></a>\n      </div>\n    </div>\n    ';let t=a(),i=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(t),r=c[i]?c[i]:s;e.innerHTML=await r()};window.addEventListener("load",e),window.addEventListener("hashchange",e)})();