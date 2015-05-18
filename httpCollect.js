var http 	= require('http');
var url 	= process.argv[2];

const BufferList = require('bl');
var bl = new BufferList();



http.get(url,function(response){
	response.setEncoding('utf8');
	
	response.on('data',function(data){
		bl.append(data);		
	});		
	
	response.on('error',console.error);
	
	response.on('end',function(string){
		console.log(bl.length);
		console.log(bl.toString());
	});
});