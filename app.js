// require express 
var express  = require('express');
// invoke express
var app 	 = express();

// testing
app.get('/', function(req,res) {
	res.send('<h1>hello world</h1>')
})

// set up server
app.listen(3000, function() {
	console.log("listening to PORT 3000");
})