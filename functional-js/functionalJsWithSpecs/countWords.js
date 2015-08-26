module.exports = function countWords(words){
	return words.reduce(function(previousValue,currentValue){
		previousValue[currentValue] = previousValue[currentValue] + 1 || 1;
		return previousValue
	},{});
}