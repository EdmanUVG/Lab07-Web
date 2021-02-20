
import { run } from "./app/app";
import "./css/style.css"
import { Stars } from "./app/stars";
import { IntroStory } from "./app/intro_story";


const stars = new Stars();
const introStory = new IntroStory();

run(stars, introStory);