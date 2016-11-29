(function() {
    'use strict';

    angular.module('movies')
        .controller('GenreController', GenreController);

    function GenreController() {
        this.list = [
            { id: 1, name: 'Action' },
            { id: 2, name: 'Fantasy' },
            { id: 3, name: 'SciFi' }
        ];

        /**
         * Get the name for a genre based on the ID
         * @param  {Number} id
         * @return {String} name
         */
        this.getGenreById = function getGenreById(id) {
            var name = null;
            console.log('looking for genre', id);
            this.list.forEach(function(genre) {
                console.log('is it this one?', genre.id);
                if (genre.id === id) {
                    name = genre.name;
                }
            });
            return name;
        };
    }

})();
