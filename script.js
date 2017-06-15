var canvas;
var canvasContext;

var tankBottom = 40;
var tankHeight = 15;
var tankGunBottom = 10;
var tankGunHeight = 15;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	drawAll();
}



// drawing all elements on canvas
function drawAll() {
	colorRectangle(0,0,canvas.width, canvas.height, 'black');
	colorRectangle(canvas.width/2-tankBottom/2, 480, tankBottom, tankHeight, 'white');
	colorRectangle(canvas.width/2-tankGunBottom/2, canvas.height-tankHeight-tankGunHeight, tankGunBottom, tankGunHeight, 'white');
}




// function which allows to use just one command in drawAll for creating each rectangle
function colorRectangle(leftX, topY, width, height, drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX, topY, width, height)
}
// function for simplifying of ball drawing in drawAll function
function colorCircle(){

}


