findmac.controller('ScraperController', [
    '$scope',
    '$http',
    function(
        $scope,
        $http) {

        console.log("### Scraper Controller")

        $scope.search = function(location) {
            $http.get('/kijiji', {params: {location: location}}).then(function(res) {
                console.log(res)
            }, function(err) {
                console.log(err);
            })
        }
    }
])
