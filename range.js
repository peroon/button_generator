var rangeController = function($scope){
	$scope.ranges = [
		{"id":"width", "min":256, "max":640, "step":2, "text":"横幅"},
		{"id":"height", "min":64, "max":640, "step":2, "text":"縦幅"},
		{"id":"round", "min":20, "max":30, "step":1, "text":"角の丸み"},
		{"id":"text_offset_x", "min":-1000, "max":1000, "step":1, "text":"テキスト位置X"},
		{"id":"text_offset_y", "min":-1000, "max":1000, "step":1, "text":"テキスト位置Y"},
		{"id":"text_size", "min":10, "max":500, "step":1, "text":"テキストサイズ"},
	];
}