var simulation = angular.module('findmac', ['ngRoute']);

console.log("### APP JS")

simulation.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'views/landing.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});