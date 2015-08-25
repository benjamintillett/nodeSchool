repeat = require('../repeat');

describe('.repeat',function(){
	it('executes the function the require number of timeas',function(){
	 	var aFunction = jasmine.createSpy('aFunction');	
	 	repeat(aFunction,3); 
	 	expect(aFunction.calls.count()).toEqual(3);
	});
});