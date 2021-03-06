"use strict";

var _nav = require("./nav");

require("../css/_earth.scss");

require("../css/_footer.scss");

require("../../node_modules/bootstrap/dist/js/bootstrap.js");

const nav = (0, _nav.createNav)();
document.getElementById("nav-earth").appendChild(nav);
const earth = document.getElementById("earth");
earth.style.backgroundImage = "url(../src/images/earth.jpg)";