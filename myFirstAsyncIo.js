var fs = require('fs');

var buff = fs.readFile(process.argv[2],'utf8',function(err,data){
	array = data.split('\n');	
	console.log(array.length - 1);
});





