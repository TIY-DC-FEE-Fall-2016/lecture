(function() {
    'use strict';

    angular.module('gitstuff')
        .controller('RepoListController', RepoListController);

    RepoListController.$inject = [ 'RepoService' ];

    function RepoListController(RepoService) {
        console.log('creating the controller');
        var vm = this;

        this.repos = [];

        this.getStuff = function getStuff() {
            // in here, "this" is our scope!
        };

        RepoService.getRepos('jquery')
            .then(function successHandler(data) {
                // this is an ASYNCHRONOUS callback
                // so "this" does NOT point to the scope in here
                console.log(data);
                vm.repos = data.items;
            })
            .catch(function failHandler(xhr) {
                console.warn(xhr);
                // what do I want to do here?
                // tell the user!!!
            });

    }

})();
