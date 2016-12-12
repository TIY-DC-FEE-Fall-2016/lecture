(function() {
    'use strict';

    angular.module('app')
        .directive('myTime', MyTimeDirective);

    MyTimeDirective.$inject = [ 'dateFilter' ];
    function MyTimeDirective(dateFilter) {
        // this constructor is only executed once

        return {
            templateUrl: 'my-time.template.html',
            restrict: 'E',  // only allow this directive to be used as an element
            scope: {
                // what do we need?
                theTimeFormat: '=format'
            },
            link: setupClockTimer
        };

        function setupClockTimer(scope, element /*, attributes, controller */) {
            // The link function is executed once per USAGE of the directive
            // This function needs the element for the directive
            // and might need the scope data

            setInterval(updateTime, 1000);
            updateTime();

            function updateTime() {
                // angular.element() is kinda like $() in jQuery
                var $ = angular.element;
                var now = new Date();
                now.setHours(23);
                $(element)
                    .find('time')
                    .text( dateFilter(now, scope.theTimeFormat) );
                element[0].querySelector('.clock').style.backgroundColor = '#' + dateFilter(now, 'HHmmss');

            }

        }

    }

})();
