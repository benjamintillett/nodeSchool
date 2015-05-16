var mymodule = require('./mymodule');

mymodule(process.argv[2],process.argv[3],function(err,list){
	if(err){
		console.log(err);
	} else {
		list.forEach(function(elt){
			console.log(elt);
		});
	}

});