(function() {
    'use strict';

    angular.module('gitstuff', [ 'ui.router' ])
        .config(routerConfig)
        .run(requireLogin);


    routerConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];

    function routerConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('', '/');
        $urlRouterProvider.when('/repositories', '/repos');
        $urlRouterProvider.otherwise('/not-found');

        $stateProvider
            .state({
                name: 'home',
                url: '/',
                templateUrl: 'views/home.template.html'
            })
            .state({
                name: 'not-found',
                url: '/not-found',  // this must match the "otherwise()" call above
                templateUrl: 'views/not-found.template.html'
            })
            .state({
                name: 'repoList',
                url: '/repos',
                templateUrl: 'views/repolist.template.html',
                controller: 'RepoListController',
                controllerAs: 'repoList',
                doYouNeedToBeLoggedInForThisState: true
            })
            .state({
                name: 'repoList.detail',
                url: '/:user/:reponame',
                templateUrl: 'views/repo-detail.template.html',
                controller: 'RepoDetailController',
                controllerAs: 'foobar',
                doYouNeedToBeLoggedInForThisState: true
            })
            .state({
                name: 'login',
                url: '/login',
                templateUrl: 'views/login.template.html',
                controller: 'LoginController',
                controllerAs: 'login',
                params: {
                    message: null
                }
            });

    }


    requireLogin.$inject = [ '$rootScope', '$state', 'RepoService' ];

    function requireLogin($rootScope, $state, RepoService) {
        $rootScope.$on('$stateChangeStart', function checkLoginStatus(event, toState) {
            if (toState.doYouNeedToBeLoggedInForThisState &&
                !RepoService.isLoggedIn()) {
                event.preventDefault();
                $state.go('login', {
                    message: 'You need to log in before accessing the ' + toState.name + ' page.'
                });
            }
        });
    }


})();
