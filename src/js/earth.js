import { createNav } from './nav';
import '../css/_earth.scss';
import '../css/_footer.scss';
import '../../node_modules/bootstrap/dist/js/bootstrap.js'

const nav = createNav();
document.getElementById("nav-earth").appendChild(nav);

const earth = document.getElementById("earth");
earth.style.backgroundImage = "url(../src/images/earth.jpg)";