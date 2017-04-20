var express  = require('express');
var app 	 = express();
var markdown = require("markdown-js");
var fs 		 = require("fs");

// about-page route
app.get('/about-page', function(req,res) {
	// read md file using built in fs 'readFileSync method'
	var str = fs.readFileSync("./content/about-page/index.md", "utf8");
	// convert file's content into html using markdown-js 'makeHtml method'
	var result = markdown.makeHtml(str);
	// render converted md file
	res.status(200).send(result);
})

// set up server
app.listen(3000, function() {
	console.log("listening to PORT 3000");
})