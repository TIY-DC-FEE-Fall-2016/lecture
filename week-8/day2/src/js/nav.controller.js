(function() {
    'use strict';

    angular.module('gitstuff')
        .controller('NavController', NavController);

    NavController.$inject = [ '$state', 'RepoService' ];

    function NavController($state, RepoService) {

        this.isLoggedIn = RepoService.isLoggedIn;

        this.logout = function logout() {
            RepoService.logout();
            $state.go('home');
        };

    }

})();
