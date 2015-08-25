var upperCaser = require('../helloWorld');

describe('uppercaser',function(){
	it('returns the string uppercasd',function(){
		expect(upperCaser('Ben')).toEqual("BEN");
	});
});