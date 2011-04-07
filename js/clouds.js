const
CLOUD_MAX_SIZE = 30;
const
CLOUD_MIN_SIZE = 10;

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
		if (this.transparency > 0.33) {
			this.positionX += deltaX;
		} else if (this.transparency > 0.16) {
			this.positionX += deltaX / 1.5;
		} else {
			this.positionX += deltaX / 2;
		}
	}
}

Cloud.prototype.initStartingValues = function() {
	this.positionY = this.height / 3 - (this.height / 3 * Math.random());
	this.radius = CLOUD_MIN_SIZE + Math.random() * CLOUD_MAX_SIZE;
	this.transparency = Math.random() / 2;
}

Cloud.prototype.draw = function(ctx) {
	ctx.fillStyle = 'rgba(255, 255, 255, ' + this.transparency + ')';
	ctx.beginPath();
	ctx.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
}

