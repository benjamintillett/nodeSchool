var map = require('../map');

describe('.map',function(){
	it('can double an array',function(){
		var array = [1,2,3]
		var doubledArray = map(array,function(elt){
			return 2*elt;
		});
		expect(doubledArray).toEqual([2,4,6]);
	});
});