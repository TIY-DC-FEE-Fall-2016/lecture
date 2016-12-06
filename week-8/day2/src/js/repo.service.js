(function() {
    'use strict';

    angular.module('gitstuff')
        .factory('RepoService', RepoService);

    RepoService.$inject = [ '$http' ];

    function RepoService($http) {
        console.log('creating service');
        // can't inject stuff here, I'm already in the function!!

        return {
            getRepos: getRepos
        };

        /**
         * search repos by some search string
         * @param {String} query the search string
         * @return {Promise}     the completed ajax call promise
         */
        function getRepos(query) {
            return $http({
                url: 'https://api.github.com/search/repositories',
                // data: {}, // in angular, this is ONLY for POSTs
                params: { // this is for the query string
                    q: query
                },
                method: 'get',
                headers: {
                    // 'Content-Type': 'application/json' // if using post
                    // Authorization: 'token...'
                }
            })
            .then(function onlyReturnData(response) {
                // we want to only give back the data form the server
                // on success, not the status code, etc
                return response.data;
            });
        }
    }

})();
