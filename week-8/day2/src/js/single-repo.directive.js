(function() {
    'use strict';

    angular.module('gitstuff')
        .directive('singleRepo', singleRepo);


    function singleRepo() {

        return {
            // directive configuration
            templateUrl: 'views/single-repo.template.html',
            restrict: 'E', // restrict usage to a custom element versus an "A"ttribute
            scope: {
                repo: '=thethingtoshow',
                stars: '='  // use the HTML attribute with the SAME name
            }
        };

    }

})();
