var concat = require('concat-stream');
var through = require('through2');

function reverse(s){
    return s.split("").reverse().join("");
}

process.stdin.pipe(concat(function(body){
	var reversedString = reverse(body.toString());
	process.stdout.write(reversedString);
}));

