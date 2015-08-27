var reduce = require('../reduce');

describe('.reduce',function(){
	it('can sum an array',function(){
		var sum = reduce([1,2,3],function(prev,curr){
			return prev + curr;
		},0)
		expect(sum).toEqual(6);
	})

	it('can build a object',function(){
		var object = reduce(['hello','hello'],function(prev,curr){
			prev[curr] = prev[curr] + 1 || 1;
			return prev
		},{});
		expect(object).toEqual({ hello: 2});
	});

});