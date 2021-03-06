"use strict";

var _nav = require("./nav");

var _stars = require("./stars");

require("../css/_index.scss");

var _rocket = _interopRequireDefault(require("../images/rocket.png"));

require("../../node_modules/bootstrap/dist/js/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const nav = (0, _nav.createNav)();
document.getElementById("nav-index").appendChild(nav);
const rocket = document.getElementById("rocket");
rocket.src = _rocket.default;
const stars = new _stars.Stars();
stars.getStars();