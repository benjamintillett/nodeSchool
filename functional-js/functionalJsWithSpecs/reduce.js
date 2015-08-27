module.exports = function reduce(array,fn,initial){
	if (array.length === 1) return fn(initial,array[0]);             // end condition
   	var last = array[array.length-1];
   	var remainingArray = array.slice(0,array.length-1);	
   	return fn(reduce(remainingArray,fn,initial),last)
}
