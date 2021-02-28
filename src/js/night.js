import { createNav } from './nav';
import { Estrellas } from './estrellas';
import '../css/_night.scss';
import '../css/_footer.scss';
import forestImg from '../images/forest.png';
import '../../node_modules/bootstrap/dist/js/bootstrap.js'

const nav = createNav();
document.getElementById("nav-night").appendChild(nav);

const forest = document.getElementById("forest");
forest.src = forestImg;

const estrellas = new Estrellas();
estrellas.getEstrellas();