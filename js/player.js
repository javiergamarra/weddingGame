function Player() {
	this.image = new Image();
	this.image.src = "img/bride.gif";

	this.width = 48;
	this.height = 48;
	this.isJumping = false;
	this.isFalling = false;
	this.jumpSpeed = 0;
	this.fallSpeed = 0;
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
	} catch (e) {
	}
}

Player.prototype.moveLeft = function() {
	if (this.X > 0) {
		this.setPosition(this.X - 7, this.Y);
	}
}

Player.prototype.moveRight = function() {
	if (this.X + this.width < w) {
		this.setPosition(this.X + 7, this.Y);
	}
}

Player.prototype.jump = function() {
	if (!this.isJumping && !this.isFalling) {
		this.fallSpeed = 0;
		this.isJumping = true;
		this.jumpSpeed = 12;
	}
}

Player.prototype.checkJump = function() {
	this.setPosition(this.X, this.Y - this.jumpSpeed);
	this.jumpSpeed--;
	if (this.jumpSpeed == 0) {
		this.isJumping = false;
		this.isFalling = true;
		this.fallSpeed = 1;
	}
}

Player.prototype.checkFall = function() {
	if (this.Y < h - this.height) {
		this.setPosition(this.X, this.Y + this.fallSpeed);
		this.fallSpeed++;
	} else {
		this.fallStop();
	}
}

Player.prototype.fallStop = function() {
	this.isFalling = false;
	this.fallSpeed = 0;
}
