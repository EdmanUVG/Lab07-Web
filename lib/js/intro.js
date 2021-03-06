"use strict";

var _nav = require("./nav");

require("../css/_intro.scss");

require("../css/_footer.scss");

require("../../node_modules/bootstrap/dist/js/bootstrap.js");

const nav = (0, _nav.createNav)();
document.getElementById("nav-intro").appendChild(nav);