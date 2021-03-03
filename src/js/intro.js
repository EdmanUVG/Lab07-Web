import { createNav } from './nav';
import '../css/_intro.scss';
import '../css/_footer.scss';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';

const nav = createNav();
document.getElementById("nav-intro").appendChild(nav);