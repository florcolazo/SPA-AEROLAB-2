"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getData = _interopRequireDefault(require("../utils/getData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Home = function Home(Products) {
  var products, view;
  return regeneratorRuntime.async(function Home$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _getData["default"])());

        case 2:
          products = _context.sent;
          view = "\n    <div class=\"Products\">\n      ".concat(products.map(function (product) {
            return "\n        <article class=\"Products-item\">\n          <a href=\"#/".concat(product._id, "/\">\n            <img src=\"").concat(product.img.hdUrl, "\" alt=\"").concat(product.img.hdUrl, "\">\n            <h2>").concat(product.category, "</h2>\n            <h2>").concat(product.name, "</h2>\n           \n             \n          </a>\n        </article>\n      ");
          }).join(''), "\n    </div>\n  ");
          return _context.abrupt("return", view);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = Home;
exports["default"] = _default;