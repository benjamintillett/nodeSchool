checkUsersValid = require('../checkUsersValid');

describe('.checkUsersValid',function(){
	var validUsers = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	]
	it('knows { id: 1 } is valid',function(){
	 	var users = [
	 		{ id: 1 }
	 	]
	 	var testAllValid = checkUsersValid(validUsers);
	 	expect(testAllValid(users)).toEqual(true);
	});

	it('knows { id: 5 } is not valid',function(){
	 	var users = [
	 		{ id: 5 }
	 	]
	 	var testAllValid = checkUsersValid(validUsers);
	 	expect(testAllValid(users)).toEqual(false);
	});

	it('knows [{ id: 1 }, { id: 3 } is a valid list',function(){
	 	var users = [
	 		{ id: 1 },
	 		{ id: 3 }
	 	]
	 	var testAllValid = checkUsersValid(validUsers);
	 	expect(testAllValid(users)).toEqual(true);
	});
	it('knows [{ id: 1 }, { id: 4 } is not a valid list',function(){
	 	var users = [
	 		{ id: 1 },
	 		{ id: 4 }
	 	]
	 	var testAllValid = checkUsersValid(validUsers);
	 	expect(testAllValid(users)).toEqual(false);
	});
});