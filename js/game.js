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
var numberOfClouds = 7, clouds = [], numberOfMountains = 7, mountains = [],numberOfTrees = 27, trees = [];

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
		clouds[i].draw(ctx);
	}
};

for ( var i = 0; i < numberOfMountains; i++)
	mountains.push(new Mountain(w, h))
var drawMountains = function() {
	for ( var i = 0; i < numberOfMountains; i++) {
		mountains[i].draw(ctx);
	}
};
drawMountains();

for ( var i = 0; i < numberOfTrees; i++)
	trees.push(new Tree(w, h))
var drawTrees = function() {
	for ( var i = 0; i < numberOfTrees; i++) {
		trees[i].draw(ctx);
	}
};
drawTrees();

var moveClouds = function(deltaX) {
	for ( var i = 0; i < numberOfClouds; i++) {
		clouds[i].move(deltaX);
	}
};

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
	drawTrees();
	if (player.isJumping)
		player.checkJump();
	if (player.isFalling)
		player.checkFall();
	player.draw(ctx);
	loop = setTimeout(GameLoop, 1000 / 50);
}
GameLoop();