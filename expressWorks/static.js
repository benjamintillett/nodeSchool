var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.get('/', function(req, res){
        res.sendFile('/index.html');
});

app.listen(process.argv[2]); 