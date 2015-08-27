var duckCount = require('../duckCount');

describe('duck count', function(){
	var realDuck = { quack: "quack" };
	var fakeDuck = Object.create(realDuck);
	var emptyObject = {};
	var realDuck2 = { quack: "quack", book: "skjsldfj" };

	it('know a duck is a duck',function(){
		expect(duckCount(realDuck)).toEqual(1);
	});
	it('knows an empty object is not a duck',function(){
		expect(duckCount(emptyObject,realDuck)).toEqual(1);
	});
	it('knows a fake duck is not a duck',function(){
		expect(duckCount(emptyObject,realDuck,fakeDuck)).toEqual(1);
	});
	it('can see more than two ducks',function(){
		expect(duckCount(realDuck,realDuck2)).toEqual(2);
	})
});