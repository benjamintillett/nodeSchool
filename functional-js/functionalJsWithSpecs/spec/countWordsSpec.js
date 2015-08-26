countWords = require('../countWords');

describe('.countWords',function(){
	it("knows ['hello'] has one occurence of hello",function(){
	 	var words = ['hello'];
	 	var wordCount = countWords(words)
	 	expect(wordCount.hello).toEqual(1);
	});
	it("knows ['hello'] has two occurences of hello",function(){
	 	var words = ['hello','hello','dog'];
	 	var wordCount = countWords(words)
	 	expect(wordCount.hello).toEqual(2);
	});
	it("knows ['hello'] has two occurences of hello",function(){
	 	var words = ['hello','hello'];
	 	var wordCount = countWords(words)
	 	expect(wordCount.hello).toEqual(2);
	});
});