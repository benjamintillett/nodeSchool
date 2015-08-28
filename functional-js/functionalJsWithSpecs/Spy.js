module.exports = function(target,method){
	var spy = { count: 0 }
	var originalMethod = target[method];
	target[method] = function(){ 
		spy.count++
		return originalMethod.apply(this,arguments); 
	}
	return spy;
}