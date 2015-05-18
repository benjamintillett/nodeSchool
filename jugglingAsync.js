var http 	= require('http');
var url 	= process.argv[2];

const BufferList = require('bl');

function printResponses(urlList,responses){
	urlList.forEach(function(url){
		console.log(responses[url]);
	});
}

function getDataString(urlList){
	responses = {}
	count = 0
	urlList.forEach(function(url){
		http.get(url,function(response){
			response.setEncoding('utf8');
			var bl = new BufferList();
			response.on('data',function(data){
				bl.append(data);		
			});		
			response.on('error',console.error);
			response.on('end',function(string){
				 responses[url] = bl.toString();
				 count++ 
				 if (count == 3){
				 	printResponses(urlList,responses);
				 }	
			});
		});
	});
}

var urlList = [process.argv[2],process.argv[3],process.argv[4]]
getDataString(urlList);
