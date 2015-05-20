function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(user) { 
    	return goodUsers.some(function(goodUser){
    		return goodUser.id == user.id;
    	});
    });
  };
}

module.exports = checkUsersValid

// var goodUsers = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 }
// ]

// var testAllValid = checkUsersValid(goodUsers)

// console.log(testAllValid([{ id: 2 },{ id: 1 }]));