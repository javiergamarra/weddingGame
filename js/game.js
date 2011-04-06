c = document.getElementById('canvas');
ctx = c.getContext('2d');

// Gradient
var g = ctx.createLinearGradient(0, 0, 0, c.height);
g.addColorStop(0, '#8fc6db');
g.addColorStop(0.5, '#9bd6dc');
g.addColorStop(1, '#d0e7f9');

var loop;
var w = c.width;
var h = c.height;
var numberOfClouds = 7, clouds = [], numberOfMountains = 7, mountains = [];

var player = new Player();
player.setPosition(0, ~~(h - player.height));

var clear = function() {
	ctx.fillStyle = g;
	ctx.beginPath();
	ctx.rect(0, 0, w, h);
	ctx.closePath();
	ctx.fill();
}

for ( var i = 0; i < numberOfClouds; i++)
	clouds.push(new Cloud(w, h))
var drawClouds = function() {
	for ( var i = 0; i < numberOfClouds; i++) {
		ctx.fillStyle = 'rgba(255, 255, 255, ' + clouds[i].transparency + ')';
		ctx.beginPath();
		ctx.arc(clouds[i].positionX, clouds[i].positionY, clouds[i].radius, 0,
				Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
	}
};

for ( var i = 0; i < numberOfMountains; i++)
	mountains.push(new Mountain(w, h))
var drawMountains = function() {
	for ( var i = 0; i < numberOfMountains; i++) {
		ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
		ctx.fillStyle = 'rgba(65, 36, 11, ' + mountains[i].transparency + ')';
		ctx.beginPath();
		ctx.moveTo(mountains[i].startingPosition, h);
		var size = (Math.random() * 40);
		ctx.lineTo(mountains[i].startingPosition + mountains[i].size,
				mountains[i].cima);
		ctx.lineTo(mountains[i].startingPosition + 2 * mountains[i].size, h);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
};
drawMountains();

var moveClouds = function(deltaX) {
	for ( var i = 0; i < numberOfClouds; i++) {
		clouds[i].move(deltaX);
	}
};

document.onkeydown = KeyCheck;
function KeyCheck() {
	var KeyID = event.keyCode;
	switch (KeyID) {
	case 37:
		player.moveLeft();
		break;
	case 38:
		player.jump();
		break;
	case 39:
		player.moveRight();
		break;
	case 40:
		document.Form1.KeyName.value = "Arrow Down";
		break;
	}
}

var keys = new Array();
function doKeyDown(evt) {
	keys[evt.keyCode] = true;
}
function doKeyUp(evt) {
	keys[evt.keyCode] = false;
}
function move() {
	if (38 in keys && keys[38]) { // up
		player.jump();
	}
	if (40 in keys && keys[40]) { // down
	}
	if (37 in keys && keys[37]) { // left
		player.moveLeft();
	}
	if (39 in keys && keys[39]) { // right
		player.moveRight();
	}
}

window.addEventListener('keydown', doKeyDown, true);
window.addEventListener('keyup', doKeyUp, true);

var GameLoop = function() {
	move();
	clear();
	drawClouds();
	moveClouds(1);
	drawMountains();
	if (player.isJumping)
		player.checkJump();
	if (player.isFalling)
		player.checkFall();
	player.draw(ctx);
	loop = setTimeout(GameLoop, 1000 / 50);
}
GameLoop();