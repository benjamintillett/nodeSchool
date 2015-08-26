module.exports = function(validUsers){
	return function(users){
		return users.every(function(user){
			return validUsers.some(function(validUser){
				return user.id === validUser.id;
			})
		})
	}
}