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
var numberOfClouds = 10, clouds = [];

var clear = function() {
	ctx.fillStyle = g;
	ctx.beginPath();
	ctx.rect(0, 0, w, h);
	ctx.closePath();
	ctx.fill();
}

for ( var i = 0; i < numberOfClouds; i++)
	clouds.push(new Cloud(w,h))
var drawClouds = function() {
	for ( var i = 0; i < numberOfClouds; i++) {
		ctx.fillStyle = 'rgba(255, 255, 255, ' + clouds[i].transparency + ')';
		ctx.beginPath();
		ctx.arc(clouds[i].positionX, clouds[i].positionY, clouds[i].radius, 0, Math.PI * 2,
				true);
		ctx.closePath();
		ctx.fill();
	}
};

var moveClouds = function(deltaX) {
	for ( var i = 0; i < numberOfClouds; i++) {
		clouds[i].move(deltaX);
	}
};

var GameLoop = function() {
	clear();
	drawClouds();
	moveClouds(1);
	loop = setTimeout(GameLoop, 1000 / 50);
}
GameLoop();