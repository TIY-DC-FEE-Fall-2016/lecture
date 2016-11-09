(function() {
    'use strict';

    var expect = chai.expect;

    // grab the clean, pristine version of the fixture html
    // so we can use it for each test down below
    var fixtures = $('#fixtures').html();

    describe('repo search', function() {

        it('should know that the namespace exists', function() {
            expect(window.repos).to.be.a('object');
        });

        describe('search repos', function() {

            it('should make an ajax call with a search term', function(doneCallback) {
                // hold onto the return value from the Ajax call
                var xhrPromise = window.repos.searchRepos('jordan');
                expect(xhrPromise).to.be.an('object');
                expect(xhrPromise.done).to.be.a('function');
                expect(xhrPromise.fail).to.be.a('function');

                xhrPromise
                    .done(function handleSuccess(data) {
                        expect(data).to.be.a('object');
                        expect(data.items).to.be.an('array');
                        doneCallback();  // tell mocha our test is complete
                    })
                    .fail(function handleFailure(xhr) {
                        // expect(false).to.be.true;  // if I need to force a failure
                          // tell mocha our test is complete
                          // and that there was a problem
                        doneCallback('Oh no!!');
                    });
            });

        });

        describe('adding repos to page', function() {

            afterEach(function() {
                // override the HTML INSIDE the fixtures to
                // my pristine version from before any tests ran
                $('#fixtures').html(fixtures);
            });

            it('should add repos to the page when given an array', function() {
                window.repos.addReposToPage([
                    { id: 1, name: 'foobar' },
                    { id: 2, name: 'batbaz' }
                ]);

                var repoItems = $('ul.list li');
                expect(repoItems.length).to.equal(2);
            });

            it('should not add repos if given an empty array', function() {
                window.repos.addReposToPage([]);
                var repoItems = $('ul.list li');
                expect(repoItems.length).to.equal(0);
            });

        });

    });

})();
