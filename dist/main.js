/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/index */ \"./src/routes/index.js\");\n\n\nwindow.addEventListener('load', _routes_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nwindow.addEventListener('hashchange', _routes_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://aerolab/./src/index.js?");

/***/ }),

/***/ "./src/pages/Error404.js":
/*!*******************************!*\
  !*** ./src/pages/Error404.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Error404 = () => {\n  const view = `\n      <div class=\"Error404\">\n        <h2>Error 404</h2>\n      </div>\n    `;\n  return view;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404);\n\n//# sourceURL=webpack://aerolab/./src/pages/Error404.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.js\");\n\nconst Home = async () => {\n  const products = await (0,_utils_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const view = `<div class=\"Products\">\n\n      ${products.map(product => `\n        <article class=\"Products-items\">\n        <a href=\"#/${product._id}/\">\n            <img src=\"${product.img.hdUrl}\" alt=\"${product.img.hdUrl}\">\n\n            \n            <h2>${product.name}</h2>\n            \n\n          </a>\n        </article>\n      `).join('')}\n    </div>\n  `;\n  return view;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://aerolab/./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/Product.js":
/*!******************************!*\
  !*** ./src/pages/Product.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Error404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error404 */ \"./src/pages/Error404.js\");\n/* harmony import */ var _utils_getProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getProduct */ \"./src/utils/getProduct.js\");\n\n\nconst Product = async (Products, id) => {\n  const product = await (0,_utils_getProduct__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n  if (!product) return (0,_Error404__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const {\n    img,\n    name,\n    category,\n    cost\n  } = product;\n  const view = `\n    <div class=\"product-detail\">\n      <h1 class=\"product-title\">Challenger Aereolab</h1>\n      <div class=\"product-content\">\n        <img class=\"product-img\" src=\"${img.url}\" alt=\"${name}\">\n        <div class=\"product-info\">\n          <p><strong>Name:</strong> ${name}</p>\n          <p><strong>Category:</strong> ${category}</p>\n          <p><strong>Cost:</strong> $${cost}</p>\n        </div>\n      </div>\n    </div>\n  `;\n  return view;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n\n//# sourceURL=webpack://aerolab/./src/pages/Product.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/Header */ \"./src/templates/Header.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Product */ \"./src/pages/Product.js\");\n/* harmony import */ var _pages_Error404__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Error404 */ \"./src/pages/Error404.js\");\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/resolveRoutes */ \"./src/utils/resolveRoutes.js\");\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.js\");\n\n\n\n\n\n\n\nconst routes = {\n  '/': _pages_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  '/:id': _pages_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  '/about': 'about'\n};\nconst router = async () => {\n  const header =  false || document.getElementById('header');\n  const content =  false || document.getElementById('content');\n  header.innerHTML = await (0,_templates_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  let fullHash = location.hash.slice(1).toLocaleLowerCase();\n  console.log('fullHash:', fullHash);\n  let route = await (0,_utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(fullHash);\n  console.log('route:', route);\n  let render = routes[route] ? routes[route] : _pages_Error404__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\n  // Fetch products data\n  let products = await (0,_utils_getData__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n  // Extract id from fullHash if route is '/:id'\n  let id = null;\n  if (route === '/:id') {\n    id = fullHash.split('/')[1];\n    console.log('extracted id:', id);\n  }\n  content.innerHTML = await render(products, id);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://aerolab/./src/routes/index.js?");

/***/ }),

/***/ "./src/templates/Header.js":
/*!*********************************!*\
  !*** ./src/templates/Header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_header_x2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/header-x2.png */ \"./src/assets/images/header-x2.png\");\n/* harmony import */ var _assets_images_aerolab_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/aerolab-logo.svg */ \"./src/assets/images/aerolab-logo.svg\");\n/* harmony import */ var _assets_icons_coin_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/coin.svg */ \"./src/assets/icons/coin.svg\");\n\n\n\nconst Header = () => {\n  const view = `\n      <div class = \"Header-main\">\n          <div class = \"Header-icons-container\">\n              <div class = \"Icons\">\n                  <img src = ${_assets_images_aerolab_logo_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]} alt = \"logo-encabezado\">\n              </div>\n              <div class = \"containerUser\">\n              <span class = \"user\">Florencia Colazo</span>\n                  <div class = \"containerCoin\">\n                      <span class = \"coin\">2575</span>\n                      <img src = ${_assets_icons_coin_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]} alt = \"coin\">\n                  </div>\n              </div>\n          </div>\n          <div class = \"Header-encabezado\" id=\"Fondo\">\n              <img src = ${_assets_images_header_x2_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]} alt = \"img-encabezado\">\n              <h1>\n                  <a href = \"/\">Electronics</a>\n              </h1> \n          </div>\n          <div class = \"Header-nav\">\n              <a href = \"#/about\">\n              </a>\n          </div>\n          \n      </div>\n  `;\n  return view;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://aerolab/./src/templates/Header.js?");

/***/ }),

/***/ "./src/utils/getData.js":
/*!******************************!*\
  !*** ./src/utils/getData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM3MzYwNmQ0N2E1NjAwMjFkZDc3ODMiLCJpYXQiOjE2NjQ1NjI2OTR9.QsXFINcyCncRxhJ-n6Zn1lP0yu8XRmQ1RCRu9uy1dm0';\nconst API = `https://coding-challenge-api.aerolab.co/products?token=${token}`;\nconst getData = async id => {\n  const apiURl = id ? `${API}${id}` : API; //si no existe ese id trae todos los id de la API\n\n  try {\n    const response = await fetch(apiURl); //AWAIT ESPERA A QUE ESTO SUCEDA\n\n    const data = await response.json();\n    return data; //SI TODO ES CORRECTO RETORNA LA DATA\n  } catch (error) {\n    console.log('Fetch Error', error);\n  }\n  ;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://aerolab/./src/utils/getData.js?");

/***/ }),

/***/ "./src/utils/getHash.js":
/*!******************************!*\
  !*** ./src/utils/getHash.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHash);\n\n//# sourceURL=webpack://aerolab/./src/utils/getHash.js?");

/***/ }),

/***/ "./src/utils/getProduct.js":
/*!*********************************!*\
  !*** ./src/utils/getProduct.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM3MzYwNmQ0N2E1NjAwMjFkZDc3ODMiLCJpYXQiOjE2NjQ1NjI2OTR9.QsXFINcyCncRxhJ-n6Zn1lP0yu8XRmQ1RCRu9uy1dm0';\nconst API = `https://coding-challenge-api.aerolab.co/products?token=${token}`;\nconst getProduct = async id => {\n  console.log('getProduct called with id:', id);\n  try {\n    const response = await fetch(API);\n    const data = await response.json();\n    if (id) {\n      const product = data.find(item => item._id === id);\n      if (!product) {\n        console.log('No product found with id:', id);\n        return null;\n      }\n      return product;\n    }\n    return data;\n  } catch (error) {\n    console.log(\"Fetch Error\", error);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getProduct);\n\n//# sourceURL=webpack://aerolab/./src/utils/getProduct.js?");

/***/ }),

/***/ "./src/utils/resolveRoutes.js":
/*!************************************!*\
  !*** ./src/utils/resolveRoutes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst resolveRoutes = route => {\n  if (!route || route === '') {\n    return '/';\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveRoutes);\n\n//# sourceURL=webpack://aerolab/./src/utils/resolveRoutes.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap&#39);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nbody {\\n    margin: 0;\\n    padding: 0;\\n    background-color: #f4f4f4;\\n    color: #3c484e;\\n    font-family: 'Open Sans', sans-serif;\\n\\n}\\n\\n\\n.Header-main {\\n    display: grid;\\n    grid-template-rows: 50px 3fr;\\n    grid-template-columns: 1fr;\\n    justify-content: space-between;\\n    align-items: center;\\n}\\n\\n\\n.Header-main .Header-icons-container {\\n    background-color: #f3f3f3;\\n}\\n\\n.Header-icons-container {\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\n.Icons img:first-child {\\n    width: 25px;\\n    padding: .5em;\\n}\\n\\n.containerUser {\\n    display: flex;\\n    flex-wrap: nowrap;\\n    align-items: center;\\n}\\n\\n.containerCoin{\\n    display: flex;\\n    align-items: center;\\n    background-color: rgba(95, 96, 97, 0.244);\\n    padding: 0px 5px 0px 10px;\\n    border-radius: 20px;\\n}\\n\\n.containerCoin span{\\n    font-size: 14px;\\n}\\n.containerCoin img {\\n    width: 20px;\\n    padding: .5em;\\n}\\n\\n.user {\\n    font-size: 14px;\\n    padding: .5em;\\n}\\n\\n/* .Header-main .Header-icons-container .Icons{\\n    width: 300px;\\n    height: auto;\\n    display: flex;\\n    justify-items: flex-end;\\n    align-items: center;\\n    justify-content: space-between;\\n    justify-self: end;\\n    margin-right: 50px;\\n} */\\n\\n\\n\\n.Header a {\\n    text-decoration: none;\\n    color: #ffffff;\\n}\\n\\n.Header h1 {\\n    font-size: 45px;\\n    margin-top: -200px;\\n    margin-left: 50px;\\n}\\n\\n.Header-main .Header-encabezado {\\n    display: grid;\\n    margin-bottom: 2em;\\n}\\n\\n.Header-main .Header-encabezado img {\\n    max-width: 100%;\\n    height: auto;\\n    background-position: center;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n}\\n\\n\\n.Main {\\n    padding: 10px;\\n    grid-template-columns: minmax(auto, 976px);\\n    display: grid;\\n    justify-content: center;\\n}\\n\\n.Products {\\n    padding: 1.5em;\\n    grid-template-columns: repeat(4, 1fr);\\n    grid-gap: 1.5rem;\\n    grid-row-gap: 1.5em;\\n    display: grid;\\n}\\n\\n\\n.Products-items {\\n    text-decoration: none;\\n    box-shadow: 8px 14px 38px rgba(39, 44, 49, .06), 3px 3px 8px rgba(39, 44, 49, .03);\\n    border-radius: 5px;\\n    margin: 0 0 20px 0;\\n    display: block;\\n    animation-duration: 2s;\\n    animation-name: fade;\\n}\\n\\n.Products-items img {\\n    width: 100%;\\n    height: auto;\\n    border-radius: 5px 5px 0 0;\\n}\\n\\n.Products-items a {\\n    text-decoration: none;\\n    color: #000000;\\n    font-size: 15px;\\n    font-weight: 300;\\n    text-align: center;\\n\\n}\\n\\n.Arrow-left img {\\n    margin-left: 1em;\\n    width: 35px;\\n}\\n\\n.Products-inner {\\n    grid-template-columns: 1fr 2fr;\\n    grid-gap: 1.5rem;\\n    grid-row-gap: 1.5em;\\n    display: grid;\\n    align-items: center;\\n    padding: 5em;\\n}\\n\\n.Products-card {\\n    text-decoration: none;\\n    box-shadow: 7px 7px 7px rgba(39, 44, 49, .06), 8px 8px 8px rgba(39, 44, 49, .03);\\n    border-radius: 5px;\\n    margin: 20px 20px 20px 20px;\\n    display: block;\\n    animation-duration: 2s;\\n    animation-name: fade;\\n}\\n\\n.Product-card img {\\n    width: 100%;\\n    height: auto;\\n    border-radius: 5px 5px 0 0;\\n}\\n\\n.Product-card h2 {\\n    font-size: 20px;\\n    font-weight: 400;\\n    text-align: center;\\n    color: #000000;\\n}\\n\\n.Product-card h3 {\\n    font-size: 30px;\\n    font-weight: 400;\\n    margin: 30px;\\n    text-decoration: none;\\n    text-align: left;\\n    color: #000000;\\n}\\n\\n\\n@keyframes fade {\\n    from {\\n        opacity: 0;\\n    }\\n\\n    to {\\n        opacity: 1;\\n    }\\n}\\n\\n.Main-loading {\\n    border: 4px solid #f3f3f3;\\n    border-top: 4px solid #3498db;\\n    border-radius: 50%;\\n    width: 20px;\\n    height: 20px;\\n    animation: spin 2s linear infinite;\\n}\\n\\n@keyframes spin {\\n    0% {\\n        transform: rotate(0deg);\\n    }\\n\\n    100% {\\n        transform: rotate(360deg);\\n    }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://aerolab/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://aerolab/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://aerolab/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/icons/coin.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/coin.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/b8bc711dc53d90c08c1393f95ad678a5.svg\");\n\n//# sourceURL=webpack://aerolab/./src/assets/icons/coin.svg?");

/***/ }),

/***/ "./src/assets/images/aerolab-logo.svg":
/*!********************************************!*\
  !*** ./src/assets/images/aerolab-logo.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/0a8fb170393a3c96d2c91bc7a39a60d2.svg\");\n\n//# sourceURL=webpack://aerolab/./src/assets/images/aerolab-logo.svg?");

/***/ }),

/***/ "./src/assets/images/header-x2.png":
/*!*****************************************!*\
  !*** ./src/assets/images/header-x2.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/cc65119a629dc7112f5179ebd3842a40.png\");\n\n//# sourceURL=webpack://aerolab/./src/assets/images/header-x2.png?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://aerolab/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://aerolab/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://aerolab/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://aerolab/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://aerolab/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://aerolab/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://aerolab/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;