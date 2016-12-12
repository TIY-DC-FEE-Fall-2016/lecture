(function() {
    'use strict';

    angular.module('app')
        .filter('addstars', AddStarsFilter);

    function AddStarsFilter() {

        return function addStars(input) {

            // when you filter arrays, you must return an array!!
            var newCourses = input.map(function addStarToEach(course) {
                return '**' + course + '**';
            });

            newCourses = newCourses.sort(function customSort(a, b) {
                // if you return a NEGATIVE number, then you are saying "a" comes before "b"
                // if positive, "b" comes before "a"
                if (a.split(' ').length < 2) {
                    return -1;
                } else {
                    return 1;
                }
            });
            return newCourses;
        };

    }

})();
