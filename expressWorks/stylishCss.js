var express 	= require('express');
var path 		= require('path');
var stylus		= require('stylus');
var express = require('express');
var app = express();


app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.use(stylus.middleware(process.argv[3] || path.join(__dirname, 'public')));

app.get('/', function(req, res){
        res.sendFile('/index.html');
});

app.listen(process.argv[2]); 