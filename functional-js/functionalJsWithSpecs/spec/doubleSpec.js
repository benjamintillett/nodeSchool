doubleArray = require('../double');

describe('.doubleArray',function(){
	it('doubles all numbers in a array',function(){
	 	doubledArray = doubleArray([1,4,6,8]); 
	 	expect(doubledArray).toEqual([2,8,12,16]);
	});
});