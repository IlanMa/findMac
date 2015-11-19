findmac.controller('ScraperController', [
    '$scope',
    '$http',
    function(
        $scope,
        $http) {

    	console.log("### Scraper Controller")

    	$http.get('/kjj').then(function(res){
    		console.log(res)
    	}, function(err) {
    		console.log(err);
    	})
    }
])
