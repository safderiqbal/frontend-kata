(function () {
    'use strict';

    function Facility() {
        return function (items, facility) {
            if (facility.Facilities === '') return items;

            var filtered = [];

            angular.forEach(items, function (currentItem, index) {
                var matchingFacility = false;

                currentItem.Facilities.forEach(function (currentFacility) {
                    if (currentFacility.toLowerCase().indexOf(facility.Facilities.toLowerCase()) > -1) {
                        matchingFacility = true;
                    }
                });

                if (matchingFacility)
                    filtered.push(currentItem);
            });

            return filtered;
        }
    }

    angular
        .module('laterooms-kata')
        .filter('facilities', Facility);
})();