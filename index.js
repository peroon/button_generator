var drawToCanvas = function()
{
    redraw();
};

var redraw = function(){
	console.log('redraw');
    drawButton('canvas');
    drawButton('canvas_pressed');
}

function initCanvas(){
	var defaultW = 400;
	var defaultH = 200;

	//slider default value
	$("#range_width").val(defaultW);
	$("#range_height").val(defaultH);
	$("#range_round").val(20);
	$("#range_text_size").val(50);

	//view
	$("#button_width_view").text(defaultW);
	$("#button_height_view").text(defaultH);

	drawToCanvas();

	//DEBUG
	var c = new Color();
	c = Color.makeRGB(255,128,0);
	console.log(c.toString());
	$("#color_debug").html(c.toString());
}

var drawRoundRect = function(context, param){
	var W = param.W;
	var H = param.H;
	var R = param.R;

	var offset = 5;

	//round rect
	context.beginPath();
	//lower R
	context.arc(W-offset-R, H-offset-R, R, 0 * Math.PI / 180, 90 * Math.PI / 180, false);
	context.lineTo(offset+R, H-offset);
	//lower L
	context.arc(offset+R, H-offset-R, R, 90 * Math.PI / 180, 180 * Math.PI / 180, false);
	context.lineTo(offset, offset+R);
	//upper L
	context.arc(offset+R, offset+R, R, 180 * Math.PI / 180, 270 * Math.PI / 180, false);
	context.lineTo(100+offset, offset);
	//upper R
	context.arc(W-offset-R, offset+R, R, 270 * Math.PI / 180, 360 * Math.PI / 180, false);
	context.lineTo(W-offset, 100+offset);

	context.closePath();
}


function p(v){
	console.log(v);
}

var drawButton = function(canvasName){
    var canvas = document.getElementById(canvasName);
    var W = $("#range_width").val();
    var H = $("#range_height").val();
	$("#button_width_view").text(W);
	$("#button_height_view").text(H);
    canvas.width = W;
    canvas.height = H;
    var context = canvas.getContext('2d');
    //DEBUG
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

	var isShadow = $("#checkbox_shadow").is(':checked');
	if(isShadow){
		var shadowWidth = 2;
		context.lineWidth = shadowWidth;
		context.shadowBlur   = shadowWidth+1;
		context.shadowColor = '#222222';
		context.shadowOffsetX = shadowWidth;
		context.shadowOffsetY = shadowWidth;
		context.fill();
	}

	var gradationColorArray = [];
	gradationColorArray.push(colorRgbStr);
	var colorHsl = rgbToHsl(colorRgb);

	//gradation
	var isGradation= $("#checkbox_gradation").is(':checked');
	var lightUp = 0.0;
	if(isGradation){
		lightUp = 0.1;
	}
	//gradation color
	colorHsl[2] += lightUp;
	colorRgb = hslToRgb(colorHsl)
	colorRgbStr = toRgbString(colorRgb);
	gradationColorArray.push(colorRgbStr);
	colorHsl[2] += lightUp;
	colorRgb = hslToRgb(colorHsl)
	colorRgbStr = toRgbString(colorRgb);
	gradationColorArray.push(colorRgbStr);

	var grad  = context.createLinearGradient(0, 0, 0, H);
	grad.addColorStop(0.0, gradationColorArray[0]);
	grad.addColorStop(0.5, gradationColorArray[1]);
	grad.addColorStop(1.0, gradationColorArray[2]);
	context.fillStyle = grad;
	context.fill();

	context.restore();
	context.save();

	var aspectR = W/H;
	//glitter
	var isGlitter = true;
	if(isGlitter){
		context.globalCompositeOperation = 'source-atop';
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
		context.globalCompositeOperation = 'source-over';
	}

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






