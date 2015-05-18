var http = require("http");
var url = require('url');

function parseTime(dateTime){
  	return JSON.stringify({ 
  		hour: 	dateTime.getHours(),
  		minute: dateTime.getMinutes(),
  		second: dateTime.getSeconds()
  	});
}
function unixTime(dateTime){
  	return JSON.stringify({ 
  		"unixtime": dateTime.getTime()
  	});
}


var server = http.createServer(function(request, response) {
  requestData = url.parse(request.url, true);
  dateString = requestData['query']['iso'];
  var d = new Date(dateString);
  if (requestData['pathname'] ==='/api/parsetime'){
  	responseJson = parseTime(d)
  }
  else if (requestData['pathname'] === '/api/unixtime'){
	responseJson = unixTime(d)
  }
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(responseJson);
});

server.listen(process.argv[2]);
console.log("Server is listening");