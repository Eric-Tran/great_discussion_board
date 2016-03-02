//add dependencies
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, './client')));
//require mongoose and routes to run
require('./server/config/mongoose.js');
//require routes and pss it app
require('./server/config/routes.js')(app); //require code from routes and pass it app to use in routing

app.listen(8000, function(){
	console.log('BOOM YEAH SON!');
})