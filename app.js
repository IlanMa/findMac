var express = require('express');
var http = require('http');
var cheerio = require('cheerio');
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/client'));

app.listen(process.env.PORT || 3000, function() {
    console.log("Running Server...")
});

app.get('/kjj', function(req, res) {
    request({
        uri: "http://www.kijiji.ca/b-ville-de-montreal/macbook/k0l1700281",
    }, function(error, response, body) {
        var $ = cheerio.load(body);
        var obj = {};
        $('tr').each(function(i, element) {
            var $posted = $(element).find('.posted').text().trim();
            // Verify is it has a posted date to prevent scraping ads
            if ($posted.length) {
                var $descContainer = $(element).find('.description'),
                    $urlTxt = $descContainer.find('a').text().trim(),
                    $urlRef = $descContainer.find('a').attr('href').trim(),
                    $description = $descContainer.find('p').text().trim();
                var $price = $(element).find('.price').text().trim();
                var $image = $(element).find('.image').find('img').attr('src').trim();
                obj[i] = {
                    urlTxt: $urlTxt,
                    urlRef: $urlRef,
                    description: $description,
                    price: $price,
                    image: $image,
                    date: $posted
                }
            }
        })
        console.log(obj)
    })
})
