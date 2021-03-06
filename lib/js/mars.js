"use strict";

var _nav = require("./nav");

require("../css/_mars.scss");

require("../css/_footer.scss");

require("../../node_modules/bootstrap/dist/js/bootstrap.js");

const nav = (0, _nav.createNav)();
document.getElementById("nav-mars").appendChild(nav);
const earth = document.getElementById("mars");
earth.style.backgroundImage = "url(../src/images/mars.jpg)";