(function() {
    'use strict';

    angular.module('app')
        .filter('reverse', ReverseFilter);

    function ReverseFilter() {
        // I could do other setup here!

        return function doTheReverse(input, uppercase) {
            // this fn will get executed each time the filter is needed
            // essentially, this means every time the data changes

            var text = input;
            if (uppercase) {
                text = input.toUpperCase();
            }

            // we return what we want to see on the page
            return text.split('').reverse().join('');

        };

    }

})();
