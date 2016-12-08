(function() {
    'use strict';

    angular.module('gitstuff')
        .controller('LoginController', LoginController);

    LoginController.$inject = [ '$stateParams', '$state', 'RepoService' ];

    function LoginController($stateParams, $state, RepoService) {

        this.loginDeets = {};
        this.message = $stateParams.message;

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
