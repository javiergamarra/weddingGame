function Player() {
	this.image = new Image();
	this.image.src = "img/bride.gif";

	this.width = 48;
	this.height = 48;

	this.X = 0;
	this.Y = 0;
}

Player.prototype.setPosition = function(x, y) {
	this.X = x;
	this.Y = y;
}

Player.prototype.draw = function(ctx) {
	try {
		ctx.drawImage(this.image, 0, 0, this.width, this.height, this.X,
				this.Y, this.width, this.height);
		// cutting source image and pasting it into destination one,
		// drawImage(Image Object, source X, source Y, source Width, source
		// Height, destination X (X position), destination Y (Y position),
		// Destination width, Destination height)
	} catch (e) {
	}
}

