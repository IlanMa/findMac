var express = require('express');
var http = require('http');
var cheerio = require('cheerio');
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/client'));

app.listen(process.env.PORT || 3000, function() {
	console.log("Running Server...")
});

app.get('/kjj', function(req, res){
	request({
	  uri: "http://www.kijiji.ca/b-ville-de-montreal/macbook/k0l1700281",
	}, function(error, response, body) {
		var $ = cheerio.load(body);
		$('td.description').each(function(i, element) {
			console.log($(this).children().next().text());
		})
	})
})

