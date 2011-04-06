function Cloud(positionX, positionY, radius, transparency) {
	this.positionX = positionX;
	this.positionY = positionY;
	this.radius = radius;
	this.transparency = transparency;
}

Cloud.prototype.move = function(deltaX) {
	if (this.positionX - this.radius > w) {
		this.positionX = 0 - 2 * 40;
		this.positionY = h / 2 - 2.5 * h / 2 * Math.random();
		this.radius = Math.random() * 40;
		this.transparency = Math.random() / 2;
	} else {
		this.positionX += deltaX;
	}
}
