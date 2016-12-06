(function() {
    'use strict';

    angular.module('gitstuff', [ 'ui.router' ])
        .config(routerConfig);


    routerConfig.$inject = [ '$stateProvider' ];

    function routerConfig($stateProvider) {

        $stateProvider
            .state({
                name: 'home',
                url: '',
                templateUrl: 'views/home.template.html'
            })
            .state({
                name: 'repoList',
                url: '/repos',
                templateUrl: 'views/repolist.template.html',
                controller: 'RepoListController',
                controllerAs: 'repoList'
            });

    }


})();
