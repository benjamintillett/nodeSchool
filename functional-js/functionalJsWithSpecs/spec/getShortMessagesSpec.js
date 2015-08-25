getShortMessages = require('../getShortMessages');

describe('.getShortMessages',function(){
	it('returns an array of message less than 50 characters',function(){
	 	var messages = [
	 		{ message: "this message has more than 50 characters I am sure of that" },
	 		{ message: "This has less thsn 50" }
	 	]
	 	var shortMessages = getShortMessages(messages);
	 	expect(shortMessages).toEqual(["This has less thsn 50"]);
	});
});