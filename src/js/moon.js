import { createNav } from './nav';
import '../css/_moon.scss';
import '../css/_footer.scss';
import '../../node_modules/bootstrap/dist/js/bootstrap.js'

const nav = createNav();
document.getElementById("nav-moon").appendChild(nav);
