"use strict";

var _nav = require("./nav");

require("../css/_moon.scss");

require("../css/_footer.scss");

require("../../node_modules/bootstrap/dist/js/bootstrap.js");

const nav = (0, _nav.createNav)();
document.getElementById("nav-moon").appendChild(nav);