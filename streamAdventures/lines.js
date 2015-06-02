var split = require('split');
var through = require('through2');
var lines = 1;

function write(buffer,encoding,next){
	if(lines%2 === 0){
		this.push(buffer.toString().toUpperCase() + "\n");
	} else {
		this.push(buffer.toString().toLowerCase() + "\n");
	}
	lines++;
	next();
}
function end(done){
	done();
}

var upcaseEven = through(write,end);


process.stdin.pipe(split()).pipe(upcaseEven).pipe(process.stdout);