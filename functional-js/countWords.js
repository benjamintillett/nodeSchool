function countWords(inputWords) {
	return inputWords.reduce(function(returnObject,currentValue){
		returnObject[currentValue] = ++returnObject[currentValue] || 1;  
		return returnObject
	},{});
}

module.exports = countWords

