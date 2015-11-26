var findmac = angular.module('findmac', ['ngRoute']);
'use strict';

console.log("### APP JS")

findmac.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'views/landing.html',
        controller: 'ScraperController'
    })
    .when('/result', {
    	templateUrl: 'views/result.html',
    	controller: 'ResultController'
    })
    .otherwise({
      redirectTo: '/'
    });
});