(function() {
    'use strict';

    angular.module('app')
        .controller('InstructorView', InstructorView);

    function InstructorView() {
        this.name = 'Jordan Kasper';
        this.course = 'Front end';
        this.hireDate = '3/7/2016';

        this.courses = ['front end', 'back end', 'mobile', 'ui design'];

        this.remove = function remove() {
            console.log('removing!!');
        };

        this.close = function close() {
            console.log('closing detail panel!');
        };
    }

})();
