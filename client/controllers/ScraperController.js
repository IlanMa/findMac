findmac.controller('ScraperController', [
    '$scope',
    '$http',
    "$location",
    'LocationService',
    function(
        $scope,
        $http,
        $location,
        LocationService) {

        console.log("### Scraper Controller")

        $scope.locations = LocationService.getAvailableLocations();

        $scope.search = function(location) {
            $http.get('/kijiji', {params: {location: location}}).then(function(res) {
                console.log(res);
                $location.path('/result');
            }, function(err) {
                console.log(err);
            })
        }
    }
])
