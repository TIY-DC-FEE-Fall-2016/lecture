(function() {
    'use strict';

    var expect = chai.expect;

    describe('registrar controller', function() {
        var RegistrarController;
        var mockStudentService = {};

        beforeEach(module('school'));

        beforeEach(module(function($provide) {
            $provide.value('StudentService', mockStudentService);
        }));

        beforeEach(inject(function($controller) {
            mockStudentService.getAll = function() {
                return [
                    { id: 1, name: 'Jordan', grade: 26, paid: false }
                ];
            };
            mockStudentService.add = function(argOne) {
                // we don't need to do anything in here... this is FAKE!
                mockStudentService.add.numTimesCalled++;
                mockStudentService.add.lastArgument = argOne;
            };
            mockStudentService.add.numTimesCalled = 0;

            RegistrarController = $controller('RegistrarController');
        }));

        it('should have correct scope variables', function() {
            expect(RegistrarController.newStudent).to.be.an('object');
            expect(Object.keys(RegistrarController.newStudent).length).to.equal(0);
            expect(RegistrarController.all).to.be.an('array');
            expect(RegistrarController.all.length).to.equal(1);
        });

        it('should use the service to add a new student', function() {
            RegistrarController.newStudent.foo = 'bar';
            var theStudent = {};
            RegistrarController.add(theStudent);
            expect(RegistrarController.newStudent.foo).to.be.undefined;
            expect(mockStudentService.add.numTimesCalled).to.equal(1);
            expect(mockStudentService.add.lastArgument).to.equal(theStudent);
        });

    });

})();
