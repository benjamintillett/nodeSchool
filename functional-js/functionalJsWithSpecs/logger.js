var slice = Array.prototype.slice


function logger(namespace){
	return function(){
		var text = slice.call(arguments);
		text.unshift(namespace);
		console.log.apply(null,text);
	}	
}	

var info = logger('INFO:')
info('this is an info message', 'nd its fucking cool')

module.exports = logger
