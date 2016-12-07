(function() {
    'use strict';

    angular.module('gitstuff')
        .controller('LoginController', LoginController);

    LoginController.$inject = [ '$state', 'RepoService' ];

    function LoginController($state, RepoService) {

        this.loginDeets = {};

        /**
         * [login description]
         * @param  {String} token
         */
        this.login = function login(token) {
            RepoService.login(token);
            // if we were doing ajaxy stuff... I would need a .then() here
            $state.go('repoList');
            // $state.go('repoList.detail', {
            //   user: 'jakerella',
            //   reponame: 'jquery-mockjax'
            // });
        };

    }

})();
