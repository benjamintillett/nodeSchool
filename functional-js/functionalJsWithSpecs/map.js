module.exports = function(array,fn){
	return array.reduce(function(previous,current){
		return previous.concat(fn(current));
	},[]);
}