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

Mountain.prototype.draw = function(ctx) {
	ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
	ctx.fillStyle = 'rgba(65, 36, 11, ' + this.transparency + ')';
	ctx.beginPath();
	ctx.moveTo(this.startingPosition, h);
	var size = (Math.random() * 40);
	ctx.lineTo(this.startingPosition + this.size, this.cima);
	ctx.lineTo(this.startingPosition + 2 * this.size, h);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}