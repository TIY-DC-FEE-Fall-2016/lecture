(function() {
    'use strict';

    window.repos = window.repos || {};

    // I can do this assignment here because
    // functions are HOISTED to the top of the nearest scope
    window.repos.searchRepos = searchRepos;
    window.repos.addReposToPage = addReposToPage;

    /**
     * Searches GitHub for repos based on a search term
     * and puts those into a UL
     * @param  {String} searchTerm What to search by on GitHub
     * @return {[type]}            [description]
     */
    function searchRepos(searchTerm) {
        // give back the XHR object with the .done() and .fail()
        // methods on it
        return $.ajax({
            url: 'https://api.github.com/search/repositories',
            method: 'GET',
            data: { q: searchTerm },
            dataType: 'json'
        });

        // .done(function processResults(data) {
        //
        // });
    }

    /**
     * WARNING: This file should really be in a view,
     *          not in a data code file
     *
     * Adds the given repositories to the page inside a UL
     * with a class of "list"
     * @param {Array} repos The repositories you want to show in the page
     */
    function addReposToPage(repos) {
        repos.forEach(function addLi(repo) {
            $('ul.list').append('<li>' + repo.name + '</li>');
        });
    }


})();
