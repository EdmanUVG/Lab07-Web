import { createNav } from './nav';
import '../css/_robot.scss';
import '../css/style.scss';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';

const nav = createNav();
document.getElementById("nav-intro").appendChild(nav);