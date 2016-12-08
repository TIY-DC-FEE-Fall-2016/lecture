(function() {
    'use strict';

    angular.module('gitstuff')
        .factory('RepoService', RepoService);

    RepoService.$inject = [ '$http', '$q' ];

    function RepoService($http, $q) {
        console.log('creating service');
        // can't inject stuff here, I'm already in the function!!

        var loggedInToken = localStorage.getItem('apitoken');

        return {
            login: login,
            isLoggedIn: isLoggedIn,
            logout: logout,
            getRepos: getRepos,
            getRepo: getRepo
        };

        function login(token) {
            loggedInToken = token;
            localStorage.setItem('apitoken', token);
        }

        function logout() {
            loggedInToken = null;
            localStorage.removeItem('apitoken');
        }

        /**
         * [isLoggedIn description]
         * @return {Boolean} [description]
         */
        function isLoggedIn() {
            return !!loggedInToken;  // flips a "falsey" value to actually be FALSE proper
        }

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
                    q: query  // ?q=foobar
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

        /**
         * Gets repo data from GitHub withj a username and reponame
         * that is provided. Transforms the response from angular
         * to only return data in the promise callback
         *
         * @param  {String} username Github username that has the given reponame
         * @param  {String} reponame Github reponame that belongs to the username
         * @return {Promise}         Ajax call promise with transformed data (not the full repsonse)
         */
        function getRepo(username, reponame) {
            if (!username || !reponame) {
                return $q.reject( new Error('You must provide a username and reponame to get repo details') );
            }

            return $http({
                url: 'https://api.github.com/repos/' + username + '/' + reponame
            })
            .then(function transformData(response) {
                return response.data;
            });

        }
    }

})();
