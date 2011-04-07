const
TREE_MAX_SIZE = 10;
const
TREE_MIN_SIZE = 10;
const
TRUNK_SIZE = 20;
const
TRUNK_WIDTH_SIZE = 5;
const CUP_MIN_SIZE = 30;
const CUP_MAX_SIZE = 30;

function Tree(w, h) {
	this.startingPosition = Math.random() * w;
	this.cima = Math.random() * CUP_MAX_SIZE + CUP_MIN_SIZE;
	this.size = Math.random() * TREE_MAX_SIZE + TREE_MIN_SIZE;
	this.transparency = Math.random() * 0.5;
}

Tree.prototype.draw = function(ctx) {
	
	ctx.fillStyle = 'rgba(175, 81, 0,' + this.transparency + ')';
	ctx.beginPath();
	ctx.moveTo(this.startingPosition + this.size - TRUNK_WIDTH_SIZE, h);
	ctx.lineTo(this.startingPosition + this.size - TRUNK_WIDTH_SIZE,h - TRUNK_SIZE);
	ctx.lineTo(this.startingPosition + this.size + TRUNK_WIDTH_SIZE,h - TRUNK_SIZE);
	ctx.lineTo(this.startingPosition + this.size + TRUNK_WIDTH_SIZE, h);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
	
	ctx.fillStyle = 'rgba(32, 151, 0,' + this.transparency + ')';
	ctx.beginPath();
	ctx.moveTo(this.startingPosition, h-TRUNK_SIZE);
	ctx.lineTo(this.startingPosition + this.size, this.cima);
	ctx.lineTo(this.startingPosition + 2 * this.size, h-TRUNK_SIZE);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}