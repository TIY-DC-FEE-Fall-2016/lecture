(function() {
    'use strict';

    angular.module('school')
        .controller('RegistrarController', RegistrarController);

    RegistrarController.$inject = [ '$location', 'StudentService' ];

    function RegistrarController($location, theThing) {
        console.log('creating new controller');

        // theThing will point to the StudentService
        // (but we SHOULD name it studentService for clarity)

        console.log($location.host());

        this.newStudent = {};

        this.all = theThing.getAll();

        this.add = function add(student) {
            theThing.add(student);
            // reset the form to have all blanks
            this.newStudent = {};
        };

    }

})();
