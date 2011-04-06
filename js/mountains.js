const
MOUNTAIN_MAX_SIZE = 30;
const
MOUNTAIN_MIN_SIZE = 10;

function Mountain(w, h) {
	this.startingPosition = Math.random() * w;
	this.cima = Math.random() * h / 2;
	this.size = Math.random() * MOUNTAIN_MAX_SIZE + MOUNTAIN_MIN_SIZE;
	this.transparency = Math.random() * 0.1;
}