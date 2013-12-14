var rangeController = function($scope){
	$scope.ranges = [
		{"id":"width", "min":256, "max":640, "step":2},
		{"id":"height", "min":256, "max":640, "step":2},
		{"id":"round", "min":20, "max":30, "step":1},
		{"id":"offset_x", "min":0, "max":300, "step":1},
		{"id":"offset_y", "min":0, "max":300, "step":1},
		{"id":"text_size", "min":10, "max":50, "step":1},
	];
}