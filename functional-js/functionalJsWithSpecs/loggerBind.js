var slice = Array.prototype.slice

function loggerBind(namespace){
	return console.log.bind(null,namespace);
}	

module.exports = loggerBind
