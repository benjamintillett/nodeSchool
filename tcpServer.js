var strftime = require('strftime') // not required in browsers
var net = require('net');
var server = net.createServer(function(socket){
	socket.end(strftime('%Y-%m-%d %H:%M') + "\n");
});

server.listen(process.argv[2])