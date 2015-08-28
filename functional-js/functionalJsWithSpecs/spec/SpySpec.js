var Spy = require('../Spy');

describe('.spy',function(){
	beforeEach(function(){
		spyOn(console,'error');
	});
	it('knows how many times a method has been called',function(){
		var spy = Spy(console, 'error')
		console.error('calling console.error')
		console.error('calling console.error')
		expect(spy.count).toEqual(2);
	});
});