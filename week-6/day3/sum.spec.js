(function() {
    'use strict';

    describe('sum functionality', function() {

        it('should produce an error if no array given', function() {
            try {
                window.lecture.sum();
                // if I get here, then sum() did NOT throw an error
                expect(true).to.be.false;
            } catch(err) {
                expect(err).to.be.an.instanceof(Object);
                expect(err).to.be.an.instanceof(TypeError);
            }
        });

        it('should throw a SyntaxError when the array does not have all numbers', function() {
            try {
                window.lecture.sum([1, 2, 'b']);
                // if I get here, then sum() did NOT throw an error
                expect(true).to.be.false;
            } catch(err) {
                expect(err).to.be.an.instanceof(Object);
                expect(err).to.be.an.instanceof(SyntaxError);
            }
        });

        it('should give the total when given some numbers', function() {
            var result = window.lecture.sum([1, 2, 3]);
            expect(result).to.equal(6);
        });

    });

})();
