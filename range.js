var rangeController = function($scope){
	$scope.ranges = [
		{"id":"width", "min":10, "max":1000, "step":2},
		{"id":"height", "min":10, "max":1000, "step":2},
		{"id":"offset_x", "min":10, "max":40, "step":1},
		{"id":"offset_y", "min":10, "max":40, "step":1},
		{"id":"text_size", "min":10, "max":50, "step":1},
	];
}