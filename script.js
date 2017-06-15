var canvas;
var canvasContext;

window.onload = function() {
	document.getElementById('gameCanvas');
	canvasContext.getContext('2d');

	var framesPerSecond = 30;
	
	setInterval( function() {
		//moveEverything();
		drawAll();
	}, 1000/framesPerSecond);
}


function drawAll() {

	colorRect(0,0,canvas.width, canvas.height, 'black' );

}