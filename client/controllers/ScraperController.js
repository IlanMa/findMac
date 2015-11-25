findmac.controller('ScraperController', [
    '$scope',
    '$http',
    'LocationService',
    function(
        $scope,
        $http,
        LocationService) {

        console.log("### Scraper Controller")

        $scope.locations = LocationService.getAvailableLocations();

        $scope.search = function(location) {
            $http.get('/kijiji', {params: {location: location}}).then(function(res) {
                console.log(res)
            }, function(err) {
                console.log(err);
            })
        }
    }
])
