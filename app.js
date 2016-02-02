var express = require('express');
var http = require('http');
var cheerio = require('cheerio');
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/client'));

app.listen(process.env.PORT || 3000, function() {
    console.log("Running Server...")
});

// Just testin'
app.get('/kijiji', function(req, res) {
    var pageURL = '',
        page = 1,
        data = 0,
        obj = {};
    while (page <= 10) {
        pageURL = "/page-" + page;
        request({
            uri: "http://www.kijiji.ca/b-" + req.query.location + "/macbook" + pageURL + "/k0l1700281",
        }, function(error, response, body) {
            var $ = cheerio.load(body);
            $('tr').each(function(i, element) {
                var $posted = $(element).find('.posted').text().trim();
                // Verify if it has a posted date to prevent scraping ads
                if ($posted.length) {
                    var $descContainer = $(element).find('.description'),
                        $urlTxt = $descContainer.find('a').text().trim(),
                        $urlRef = $descContainer.find('a').attr('href').trim(),
                        $description = $descContainer.find('p').text().trim();
                    var $price = $(element).find('.price').text().trim();
                    var $image = $(element).find('.image').find('img').attr('src').trim();
                    obj[data++] = {
                            urlTxt: $urlTxt,
                            urlRef: $urlRef,
                            description: $description,
                            price: $price,
                            image: $image,
                            date: $posted
                        }
                        // once data is 200, scraping is complete
                    if (data === 200) {
                        res.send(obj)
                    }
                }
            })
        })
        page++;
    }
})
