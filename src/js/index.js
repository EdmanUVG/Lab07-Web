
import { createNav } from './nav';
import { Stars } from './stars';
import '../css/_index.scss';
import rocketImg from '../images/rocket.png';
import '../../node_modules/bootstrap/dist/js/bootstrap.js'

const nav = createNav();
document.getElementById("nav-index").appendChild(nav);

const rocket = document.getElementById("rocket");
rocket.src = rocketImg;

const stars = new Stars();
stars.getStars();




