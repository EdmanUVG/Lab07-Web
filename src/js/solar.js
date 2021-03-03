import { createNav } from './nav';
import '../css/_solar.scss';
import '../css/_footer.scss';
import '../../node_modules/bootstrap/dist/js/bootstrap.js'

const nav = createNav();
document.getElementById("nav-solar").appendChild(nav);
