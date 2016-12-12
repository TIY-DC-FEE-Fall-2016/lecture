(function() {
    'use strict';

    angular.module('app')
        .directive('detail', DetailDirective);

    /**
     * Describe HOW TO USE your directive here.
     *
     * <some-element
     *      detail
     *      bar='"the title"'
     *      close-detail='someFntoExecuteOnButtonClick()'
     * ></some-element>
     * 
     */
    function DetailDirective() {

        return {
            templateUrl: 'detail.template.html',
            restrict: 'A',
            scope: {
                foo: '=bar',
                panelClose: '&closeDetail'
            },
            transclude: true
        };

    }

})();
