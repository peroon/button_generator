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
	$("#range_width").val(400);
	$("#range_height").val(200);
	$("#range_round").val(20);
	$("#range_text_size").val(50);

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

	var buttonColor = $("#input_color_button").val();
	var colorRgb = strToRgb(buttonColor);
	var colorRgbStr = toRgbString(colorRgb);

	context.strokeStyle = colorRgbStr;
	context.fillStyle = 'rgb(0,0,0)';//fill black

	context.save();

	//var R = $("#range_round").val();
	var R = 20;

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

	var gradationColorArray = [];
	gradationColorArray.push(colorRgbStr);
	var colorHsl = rgbToHsl(colorRgb);

	var lightUp = 0.1;
	colorHsl[2] += lightUp;
	colorRgb = hslToRgb(colorHsl)
	colorRgbStr = toRgbString(colorRgb);
	gradationColorArray.push(colorRgbStr);

	colorHsl[2] += lightUp;
	colorRgb = hslToRgb(colorHsl)
	colorRgbStr = toRgbString(colorRgb);
	gradationColorArray.push(colorRgbStr);

	//gradation
	var grad  = context.createLinearGradient(0, 0, 0, H);
	/*
	grad.addColorStop(0.0,'rgb(0,200,255)');
	grad.addColorStop(0.5,'rgb(0,150,255)');
	grad.addColorStop(1.0,'rgb(0,100,255)');
	*/
	grad.addColorStop(0.0, gradationColorArray[0]);
	grad.addColorStop(0.5, gradationColorArray[1]);
	grad.addColorStop(1.0, gradationColorArray[2]);

	context.fillStyle = grad;
	context.fill();
	context.restore();
	context.save();

	var aspectR = W/H;
	//glitter
	context.scale(1, 1/(aspectR*2));
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
	var offsetX = $("#range_text_offset_x").val();
	var offsetY = $("#range_text_offset_y").val();
	context.fillText(buttonText,50+parseInt(offsetX),75+parseInt(offsetY));

	context.restore();
};






