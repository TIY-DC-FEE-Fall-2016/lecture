(function() {
    'use strict';

    var expect = chai.expect;

    describe('student service', function() {
        var StudentService;

        // tells angular-mocks to bootstrap my module
        beforeEach(module('school'));

        // inject the "StudentService" into this anonymous function
        beforeEach(inject(function(_StudentService_) {
            // this is NOT a test... it's a beforeEach
            // so I can't write assertions in here...
            // I need to elevate (?) this injected variable up!
            StudentService = _StudentService_;
        }));


        it('should be able to add a new student', function() {
            // This test gets a new instance of StudentService
            var result = StudentService.add({ name: 'Jordan', grade: 26 });
            expect(result).to.be.undefined;
            var allStudents = StudentService.getAll();
            expect(allStudents.length).to.equal(1);
            expect(allStudents[0].name).to.equal('Jordan');
        });

        it('should fail if I do NOT provide a user object to add', function() {
            StudentService.add();
            var allStudents = StudentService.getAll();
            expect(allStudents.length).to.equal(0);
        });

        it('should fail if I do NOT provide a valid user object to add', function() {
            StudentService.add('jordan');
            var allStudents = StudentService.getAll();
            expect(allStudents.length).to.equal(0);
        });

        it('should be able to get an array of students', function() {
            // This test gets a new instance of StudentService
            // thus the student array will be EMPTY!
            var result = StudentService.getAll();
            expect(result).to.be.an('array');
            expect(result.length).to.equal(0);
        });

    });



})();
