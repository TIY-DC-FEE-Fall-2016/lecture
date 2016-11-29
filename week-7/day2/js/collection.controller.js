(function() {
    'use strict';

    angular.module('movies')
        .controller('CollectionController', CollectionController);

    function CollectionController() {
        this.movies = [];
        this.movieToAdd = {};

        /**
         * Adds a movie to the colleciton
         * @param {Object} movie Should have a title and genreId
         */
        this.addMovie = function addMovie(movie) {
            this.movies.push( {
                title: movie.title,
                genreId: Number(movie.genreId)
            } );

        };
    }

})();
