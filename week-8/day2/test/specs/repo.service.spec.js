(function() {
    'use strict';

    var expect = chai.expect;

    describe('repo service', function() {
        var RepoService;
        var $httpBackend;
        var $rootScope;

        beforeEach(module('gitstuff'));

        beforeEach(inject(function(_$rootScope_, _$httpBackend_, _RepoService_) {
            RepoService = _RepoService_;
            $httpBackend = _$httpBackend_;
            $rootScope = _$rootScope_;

            $httpBackend
                .whenGET('https://api.github.com/repos/jakerella/jquery-mockjax')
                .respond({
                    id: 12345,
                    name: 'jquery-mockjax',
                    owner: { login: 'jakerella' },
                    stargazers_count: 1234,
                    forks: 2345
                });

            // mock out the request for the home template
            $httpBackend
                .whenGET('views/home.template.html')
                .respond('whatever you want to put here');
        }));

        it('should be able to get repo details given good data', function(doneCallback) {

            var result = RepoService.getRepo('jakerella', 'jquery-mockjax');
            expect(result).to.be.a('object');
            expect(result.then).to.be.a('function');
            expect(result.catch).to.be.a('function');

            result
                .then(function(data) {
                    expect(data.name).to.equal('jquery-mockjax');
                    doneCallback();
                })
                .catch(function() {
                    doneCallback('Should not reject this promise');
                });

            $httpBackend.flush(); // go ahead and send the (fake) response now
        });

        it('should fail if no username or reponame provided', function(doneCallback) {
            var result = RepoService.getRepo();

            result
                .then(function() {
                    doneCallback('Should not resolve if no username');
                })
                .catch(function(err) {
                    expect(err).to.be.an.instanceof(Error);
                    doneCallback();
                });

            $rootScope.$digest();
        });

    });

})();
