
// Draw the stars falling down while the shipp is moving

export class Stars {
	constructor() {
		this.scene = document.querySelector('.scene');
	}

	getStars() {
		let count = 20;
		let i = 0;
		while (i < count) {
			let star = document.createElement('i');
			let x =  Math.floor(Math.random() *  window.innerWidth);

			let duration = Math.random() * 1;
			let h = Math.random() * 100;

			star.style.left = x + 'px';
			star.style.width = 1 + 'px';
			star.style.height = 50 + h + 'px';
			star.style.animationDuration = duration + 's';

			// this.scene.appendChild(star);
			i++;
		}
	}
}
