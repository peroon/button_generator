var drawToCanvas = function()
{
    redraw();
};

var redraw = function(){
    drawButton('canvas');
    drawButton('canvas_pressed');
}

function p(v){
	console.log(v);
}

function initCanvas(){
	//slider default value
	$("#range_round").val(20);
	$("#range_text_size").val(25);

	drawToCanvas();
}

var drawRoundRect = function(context, param){
	var W = param.W;
	var H = param.H;
	var R = param.R;

	//round rect
	context.beginPath();
	//lower R
	context.arc(W-5-R, H-5-R, R, 0 * Math.PI / 180, 90 * Math.PI / 180, false);
	context.lineTo(5+R, H-5);
	//lower L
	context.arc(5+R, H-5-R, R, 90 * Math.PI / 180, 180 * Math.PI / 180, false);
	context.lineTo(5, 5+R);
	//upper L
	context.arc(5+R, 5+R, R, 180 * Math.PI / 180, 270 * Math.PI / 180, false);
	context.lineTo(105, 5);
	//upper R
	context.arc(W-5-R, 5+R, R, 270 * Math.PI / 180, 360 * Math.PI / 180, false);
	context.lineTo(W-5, 105);

	context.closePath();
}


var drawButton = function(canvasName){
    var canvas = document.getElementById(canvasName);
    var W = $("#range_width").val();
    var H = $("#range_height").val();
    canvas.width = W;
    canvas.height = H;
    var context = canvas.getContext('2d');
	context.clearRect(0, 0, W, H);
	context.strokeStyle = 'rgb(00,50,255)'; //stroke blue
	context.fillStyle = 'rgb(0,0,0)';//fill black

	context.save();

	//var R = $("#range_round").val();
	var R = 20;

	p(R);

	var param = {};
	param.W = W;
	param.H = H;
	param.R = R;
	drawRoundRect(context, param);


	context.lineWidth = 3;
	context.shadowBlur   = 5;
	context.shadowColor = '#003377';
	context.shadowOffsetX = 3;
	context.shadowOffsetY = 3;
	context.fill();
	context.stroke();


	//gradation
	var grad  = context.createLinearGradient(0, 0, 0, H);
	grad.addColorStop(0,'rgb(0,200,255)');
	grad.addColorStop(0.5,'rgb(0,150,255)');
	grad.addColorStop(1,'rgb(0,100,255)');
	context.fillStyle = grad;
	context.fill();

	context.restore();
	context.save();

/*
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
	*/

	//glitter
	context.scale(1, 0.5);
	context.fillStyle = 'rgba(255,255,255,0.2)';
	context.beginPath();
	context.arc(W/2, 0, W, 0, Math.PI*2, false);
	context.closePath();
	context.shadowBlur   = 0;
	context.shadowColor = '#FFFFFF';
	context.shadowOffsetX = 0;
	context.shadowOffsetY = 0;
	context.fill();
	context.restore();

	//text
	var buttonText = $("#input_text").val();
	//context.font = "30px Verdana";
	//context.font = "40px Georgia, serif";
	var font_type = $("#select_font").val();
	var font_size = parseInt($("#range_text_size").val());
	context.font = font_size+"px "+font_type
	var font_color = $("#input_color_font").val();
	context.fillStyle = font_color;
	//position
	var offsetX = $("#range_offset_x").val();
	var offsetY = $("#range_offset_y").val();
	context.fillText(buttonText,10+parseInt(offsetX),90+parseInt(offsetY));

	context.restore();
};





















