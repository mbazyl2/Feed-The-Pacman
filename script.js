var canvas;
var canvasContext;

var tankBottomX = 480;
var tankBottomY = 485;

var tankBottom = 40;
var tankHeight = 15;
var tankGunBottom = 10;
var tankGunHeight = 15;

var bulletCenterX = 500;
var bulletCenterY = 475;

var spacePressed = false;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	var framesPerSecond = 30;

	setInterval( function() {
		moveAll();
		drawAll();
	}, 1000/framesPerSecond);

	document.addEventListener('keyup', spaceKeyHandler)
}



function moveAll() {
	bulletMovement();
}



// function for event managing
function spaceKeyHandler(evt) {
	if(evt.keyCode == 32){
		 spacePressed = true;
		 console.log('space');
		}
}


//  function for moving the bullet up the screen
function bulletMovement() {
	if( spacePressed == true && bulletCenterY > -5){
		bulletCenterY -= 5;
	} else {
		bulletCenterY = 475;
	}

}


// drawing all elements on canvas
function drawAll() {
	colorRectangle(0,0,canvas.width, canvas.height, 'black');
	colorRectangle(tankBottomX, tankBottomY, tankBottom, tankHeight, 'white');
	colorRectangle(canvas.width/2-tankGunBottom/2, canvas.height-tankHeight-tankGunHeight, tankGunBottom, tankGunHeight, 'white');
	colorCircle(bulletCenterX, bulletCenterY, 5, 'red');
}


// function which allows to use just one command in drawAll for creating each rectangle
function colorRectangle(leftX, topY, width, height, drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX, topY, width, height)
}
// function for simplifying of ball drawing in drawAll function
function colorCircle(centerX, centerY, radius, drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
	canvasContext.fill();
	canvasContext.closePath();
}


