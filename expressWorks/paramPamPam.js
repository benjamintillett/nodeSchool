var express 	= require('express');
var crypto 		= require('crypto');

var app = express();

app.put('/message/:NAME', function(req, res){
        var id = req.params.NAME;
        var responseString = crypto.createHash('sha1')
        	.update(new Date().toDateString() + id)
        	.digest('hex')
        res.end(responseString);
});

app.listen(process.argv[2]); 