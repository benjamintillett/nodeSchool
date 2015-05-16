module.exports = function(dirPath,filter,callback){
	var fs 		= require('fs');
	var path 	= require('path');

	fs.readdir(dirPath, function(err, list){
		if(err){
			return callback(err);
		}
		filteredList = list.filter(function(fileName){
			return path.extname(fileName) == '.' + filter
		});
		callback(null,filteredList);
	});
}