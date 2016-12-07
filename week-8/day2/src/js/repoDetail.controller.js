(function() {
    'use strict';

    angular.module('gitstuff')
        .controller('RepoDetailController', RepoDetailController);

    RepoDetailController.$inject = [ '$stateParams', 'RepoService' ];

    function RepoDetailController($stateParams, RepoService) {
        var vm = this;

        this.repo = {};

        RepoService.getRepo($stateParams.user, $stateParams.reponame)
            .then(function repoHandler(data) {
                vm.repo = data;
            })
            .catch(function errorHandler(xhrError) {
                // TELL THE USER SOMETHING
                console.warn(xhrError);
            });

    }

})();
