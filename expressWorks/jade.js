var express = require('express');
var path 	= require('path');
var app 	= express();

app.set('views', path.join(__dirname, 'templates')); 

app.set('view engine', 'jade')

app.get('/home',function(req,res){
	dateToday = new Date().toDateString();
	res.render('index', { date: dateToday });
});

app.listen(process.argv[2]); 
