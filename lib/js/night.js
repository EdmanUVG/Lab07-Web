"use strict";

var _nav = require("./nav");

var _estrellas = require("./estrellas");

require("../css/_night.scss");

require("../css/_footer.scss");

var _forest = _interopRequireDefault(require("../images/forest.png"));

require("../../node_modules/bootstrap/dist/js/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const nav = (0, _nav.createNav)();
document.getElementById("nav-night").appendChild(nav);
const forest = document.getElementById("forest");
forest.src = _forest.default;
const estrellas = new _estrellas.Estrellas();
estrellas.getEstrellas();