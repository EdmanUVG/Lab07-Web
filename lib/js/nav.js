"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNav = void 0;

var _logoUvg = _interopRequireDefault(require("../images/logo-uvg.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createNav = function createNav() {
  const nav = document.createElement("nav");
  nav.classList = "navbar";
  const navA = document.createElement("a");
  navA.classList = "navbar-brand";
  navA.href = "index.html";
  const logo = document.createElement("img");
  logo.id = "logo";
  logo.height = "35";
  logo.src = _logoUvg.default;
  navA.appendChild(logo);
  nav.appendChild(navA);
  return nav;
};

exports.createNav = createNav;