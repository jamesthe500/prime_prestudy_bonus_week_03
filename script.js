var functionA = function(x) {
	return x * x;
};

var functionB = function(x) {
	return 2 * x;
};

var functionC = function(x) {
	return x / 5;
};

console.log(functionA (functionB (functionC (3))));