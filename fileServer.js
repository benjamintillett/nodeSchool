var http = require("http");
var fs = require('fs');

var server = http.createServer(function(request, response) {
  fileStream = fs.createReadStream(process.argv[3])
  fileStream.pipe(response);
});
 
server.listen(process.argv[2]);
console.log("Server is listening");