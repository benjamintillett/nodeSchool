module.exports = function duckCount(){
	var args = Array.prototype.slice.call(arguments);
	return args.filter(function(arg){
		return Object.prototype.hasOwnProperty.call(arg, 'quack')
	}).length;	
}