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
var numberOfClouds = 10;

var clear = function() {
	ctx.fillStyle = g;
	ctx.beginPath();
	ctx.rect(0, 0, w, h);
	ctx.closePath();
	ctx.fill();
}

var numberOfClouds = 10, circles = [];
for ( var i = 0; i < numberOfClouds; i++)
	circles.push(new Cloud(Math.random() * w,h / 2 - 2.5 * h / 2 * Math.random(),
			Math.random() * 40, Math.random() / 2))
var DrawCircles = function() {
	for ( var i = 0; i < numberOfClouds; i++) {
		ctx.fillStyle = 'rgba(255, 255, 255, ' + circles[i].transparency + ')';
		ctx.beginPath();
		ctx.arc(circles[i].positionX, circles[i].positionY, circles[i].radius, 0, Math.PI * 2,
				true);
		ctx.closePath();
		ctx.fill();
	}
};

var MoveCircles = function(deltaX) {
	for ( var i = 0; i < numberOfClouds; i++) {
		circles[i].move(deltaX);
	}
};

var GameLoop = function() {
	clear();
	DrawCircles();
	MoveCircles(1);
	loop = setTimeout(GameLoop, 1000 / 50);
}
GameLoop();