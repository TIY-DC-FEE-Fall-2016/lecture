(function() {
    'use strict';

    var expect = chai.expect;

    // this is our test suite
    describe('my app', function() {

        it('should know that one equals one', function() {
            // this is an assertion
            expect(1).to.equal(1);
        });

        describe('sayHello', function() {
            beforeEach(function() {
                console.log('I am before!');
            });
            // afterEach()

            it('should have a function called sayHello', function() {
                console.log(window.hello.sayHello);
                expect(window.hello.sayHello).to.be.a('function');
            });

            xit('should say hello when given a name', function() {
                var result = window.hello.sayHello('Jordan');
                expect(result).to.be.a('string');
                expect(result).to.equal('Hello Jordan');
            });

            it('should handle situation when given no name', function() {
                var result = window.hello.sayHello();
                expect(result).to.equal('Where did you go?');
            });

            it('should handle a non-string argument', function() {
                var result = window.hello.sayHello(window);
                expect(result).to.equal('You are a liar.');
            });
        });

        describe('sayGoodbye', function() {

            it('should have a function called sayGoodbye', function() {
                expect(window.hello.sayGoodbye).to.be.a('function');
            });

        });

    });

})();
