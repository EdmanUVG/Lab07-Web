import { createNav } from './nav';
import '../css/_mars.scss';
import '../css/_footer.scss';
import '../../node_modules/bootstrap/dist/js/bootstrap.js'

const nav = createNav();
document.getElementById("nav-mars").appendChild(nav);

const earth = document.getElementById("mars");
earth.style.backgroundImage = "url(../src/images/mars.jpg)";