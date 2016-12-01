(function() {
    'use strict';

    angular.module('school')
        // .service()  // We do NOT want to use this!
        .factory('StudentService', StudentService);

    function StudentService() {
        // console.log('creating student service');

        var students = [];

        // this object below IS the service
        return {
            getAll: getAll,
            add: add,
            getOne: getOne
        };

        console.log('this will never be seen!');

        function getAll() {
            return students;
        }

        /**
         * Adds a student to the "database"
         * @param {Object} student Must have name and grade
         */
        function add(student) {
            if (!student || !student.name || !student.grade) {
                return;
            }

            students.push({
                id: Date.now(),
                name: student.name,
                grade: student.grade,
                paid: false
            });
        }

        function getOne(id) {
            var foundStudent = null;
            students.forEach(function findStudent(student) {
                if (id === student.id) {
                    foundStudent = student;
                }
            });
            return foundStudent;
        }
    }

})();
