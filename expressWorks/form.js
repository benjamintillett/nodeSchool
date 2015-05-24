var express 	= require('express');
var path 		= require('path');
var bodyparser 	= require('body-parser')
var app 	= express();

app.set('views', path.join(__dirname, 'templates')); 
app.set('view engine', 'jade');

app.use(bodyparser.urlencoded({extended: false}));


app.get('/home',function(req,res){
	dateToday = new Date().toDateString();
	res.render('index', { date: dateToday });
});

app.get('/form',function(req,res){
	res.render('form');
});

app.post('/form',function(req,res){
	var reversedString = req.body.str.split('').reverse().join('')
	res.render('result', {reversedString: reversedString});
});

app.listen(process.argv[2]); 
 