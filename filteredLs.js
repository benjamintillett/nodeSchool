var fs 		= require('fs');
var path 	= require('path');

var dirPath = process.argv[2] 
var ext = '.' + process.argv[3];


fs.readdir(dirPath, function(err, list){
	list.forEach(function(fileName){
		if (path.extname(fileName) == ext)
			console.log(fileName);
	});
});





