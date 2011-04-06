const
CLOUD_MAX_SIZE = 40;

function Cloud(w, h) {
	this.width = w;
	this.height = h;
	this.positionX = Math.random() * this.width;
	this.initStartingValues();
}

Cloud.prototype.move = function(deltaX) {
	if (this.positionX - this.radius > this.width) {
		this.positionX = 0 - 2 * CLOUD_MAX_SIZE;
		this.initStartingValues();
	} else {
		this.positionX += deltaX;
	}
}

Cloud.prototype.initStartingValues = function(){
	this.positionY = this.height / 2 - 2.5 * this.height / 2 * Math.random();
	this.radius = Math.random() * CLOUD_MAX_SIZE;
	this.transparency = Math.random() / 2;
}
