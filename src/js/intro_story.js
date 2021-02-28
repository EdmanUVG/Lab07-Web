
export class IntroStory {

	constructor() {
		this.scene = document.querySelector('.scene');
	}

	createIntroStory() {
		let intro = document.createElement("div");
		intro.classList.add("intro-story");
		intro.style.backgroundColor = "#ffffff";
		intro.style.height = "100px";
		intro.style.width = "100%";
		// this.scene.appendChild(intro);
	}
}




