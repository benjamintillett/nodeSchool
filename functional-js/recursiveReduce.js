function reduce(array,func,initial){
	if (!array.length) return initial;
	var head = array[array.length -1]
	var tail = array.slice(0,-1);
	return func(reduce(tail,func,initial),head);
}


module.exports = reduce