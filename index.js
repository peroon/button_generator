var drawToCanvas = function()
{
    redraw();
};

var redraw = function(){
    drawButton('canvas');
    drawButton('canvas_pressed');
}

var drawButton = function(canvasName){

    var canvas = document.getElementById(canvasName);
    var W = canvas.width;
    var H = canvas.height;
    var R = 30;
    var context = canvas.getContext('2d');

	context.clearRect(0, 0, W, H);
	context.strokeStyle = 'rgb(00,50,255)'; //stroke blue
	context.fillStyle = 'rgb(0,0,0)';//fill black

	context.save();

	//round rect
	context.beginPath();
	//lower R
	context.arc(W-35, H-35, R, 0 * Math.PI / 180, 90 * Math.PI / 180, false);
	context.lineTo(35, H-5);
	//lower L
	context.arc(35, H-35, R, 90 * Math.PI / 180, 180 * Math.PI / 180, false);
	context.lineTo(5, 35);
	//upper L
	context.arc(35, 35, R, 180 * Math.PI / 180, 270 * Math.PI / 180, false);
	context.lineTo(105, 05);
	//upper R
	context.arc(W-35, 35, R, 270 * Math.PI / 180, 360 * Math.PI / 180, false);
	context.lineTo(W-5, 105);

	context.closePath();

	context.lineWidth = 3;
	context.shadowBlur   = 5;
	context.shadowColor = '#003377';
	context.shadowOffsetX = 3;
	context.shadowOffsetY = 3;
	context.fill();
	context.stroke();

/*
	//gradation
	var grad  = context.createLinearGradient(0,0, 0,140);
	grad.addColorStop(0,'rgb(0,200,255)');
	grad.addColorStop(0.5,'rgb(0,150,255)');
	grad.addColorStop(1,'rgb(0,100,255)');
	context.fillStyle = grad;
	context.fill();

	context.restore();
	context.save();

	context.fillStyle = 'rgb(255,255,255)';

	context.beginPath();
	context.arc(105, 105, R, 0 * Math.PI / 180, 90 * Math.PI / 180, false);
	context.lineTo(35, 135);
	context.arc(35, 105, R, 90 * Math.PI / 180, 180 * Math.PI / 180, false);
	context.lineTo(05, 35);
	context.arc(35, 35, R, 180 * Math.PI / 180, 270 * Math.PI / 180, false);
	context.lineTo(105, 05);
	context.arc(105, 35, R, 270 * Math.PI / 180, 360 * Math.PI / 180, false);
	context.lineTo(135, 105);
	context.closePath();

	context.lineWidth = 3;
	context.shadowBlur   = 5;
	context.shadowColor = '#003377';
	context.shadowOffsetX = 3;
	context.shadowOffsetY = 3;
	context.clip();

	//glitter
	context.scale(1, 0.5);
	context.fillStyle = 'rgba(255,255,255,0.2)';
	context.beginPath();
	context.arc(70, 75, 80, 0, Math.PI*2, false);
	context.closePath();
	context.shadowBlur   = 0;
	context.shadowColor = '#FFFFFF';
	context.shadowOffsetX = 0;
	context.shadowOffsetY = 0;
	context.fill();
	*/

	//text
	context.font = "30px Verdana";
	context.fillStyle = 'rgb(255,255,0)';
	context.fillText("button text",10,90);

	context.restore();
};