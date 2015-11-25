findmac.service('LocationService', function() {
    'use strict';

    console.log("### Location Service")

    return {
        getAvailableLocations: function() {
            var availableLocations = [
                'montreal', 'toronto', 'vancouver'
            ]
            return availableLocations;
        }
    }
})
