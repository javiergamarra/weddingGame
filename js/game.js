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

var clear = function() {
	ctx.fillStyle = g;
	ctx.beginPath();
	ctx.rect(0, 0, w, h);
	ctx.closePath();
	ctx.fill();
}

var howManyCircles = 10, circles = [];
for ( var i = 0; i < howManyCircles; i++)
	circles.push( [ Math.random() * w,
			h / 2 - 2.5 * h / 2 * Math.random(),
			Math.random() * 40, Math.random() / 2 ]);
var DrawCircles = function() {
	for ( var i = 0; i < howManyCircles; i++) {
		ctx.fillStyle = 'rgba(255, 255, 255, ' + circles[i][3] + ')';
		ctx.beginPath();
		ctx.arc(circles[i][0], circles[i][1], circles[i][2], 0, Math.PI * 2,
				true);
		ctx.closePath();
		ctx.fill();
	}
};

var MoveCircles = function(deltaY) {
	for ( var i = 0; i < howManyCircles; i++) {
		if (circles[i][0] - circles[i][2] > w) {
			// the circle is under the screen so we change
			// informations about it
			circles[i][0] = 0 - circles[i][2];
			circles[i][1] = h / 2 - 2.5 * h / 2 * Math.random();
			circles[i][2] = Math.random() * 40;
			circles[i][3] = Math.random() / 2;
		} else {
			// move circle deltaY pixels down
			circles[i][0] += deltaY;
		}
	}
};

var GameLoop = function() {
	clear();
	DrawCircles();
	MoveCircles(1);
	loop = setTimeout(GameLoop, 1000 / 50);
}
GameLoop();