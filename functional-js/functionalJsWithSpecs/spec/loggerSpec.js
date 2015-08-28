var logger = require('../logger');

describe('.logger',function(){

	beforeAll(function(){
		spyOn(console,'log');
		
	});
	
	it('created a fuction that takes conolse.logs a message',function(){
		var info = logger('INFO:')
		info("this is a info message");
		expect(console.log).toHaveBeenCalledWith('INFO:',"this is a info message");
	});
});