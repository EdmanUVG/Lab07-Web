
import { run } from "./app/app";
import "./css/style.scss"
import { Stars } from "./app/stars";
import { IntroStory } from "./app/intro_story";
import logoUVG from "./assets/logo-uvg.png";
import rocketImg from "./assets/rocket.png";
import forestImg from "./assets/forest.png";

const stars = new Stars();
const introStory = new IntroStory();

run(stars, introStory);

const logoU = document.getElementById("logo");
logo.src = logoUVG;

const rocket = document.getElementById("rocket");
rocket.src = rocketImg;

const forest = document.getElementById("forest");
forest.src = forestImg;

