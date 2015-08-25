function repeat(passedFunction,n){
	if(n === 0) return
	passedFunction();
	repeat(passedFunction,n-1);
}

module.exports = repeat;