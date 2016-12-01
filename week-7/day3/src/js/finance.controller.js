(function() {
    'use strict';

    angular.module('school')
        .controller('FinanceController', FinanceController);

    FinanceController.$inject = [ 'StudentService' ];

    function FinanceController(studentService) {
        console.log('creating finance controller');

        this.payStatus = {};

        this.markPaid = function markPaid(id) {
            this.message = null;

            console.log('the ID', id);

            id = Number(id);

            if (!id || typeof(id) !== 'number') {
                this.message = 'Please type in a valid ID';
                return;
            }

            var student = studentService.getOne(id);
            if (student) {
                student.paid = true;
            }

        };
    }

})();
