'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        karma: {

            options: {
                frameworks: ['mocha', 'chai'],
                client: {
                    mocha: {
                        ui: 'bdd'
                    }
                },
                browsers: ['PhantomJS'],
                singleRun: true
            },

            // my targets
            // controllers: {},
            // directives: {},
            services: {
                options: {
                    files: [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-ui-router/release/angular-ui-router.js',
                        'node_modules/angular-mocks/angular-mocks.js',
                        'src/js/gitstuff.module.js',
                        'src/js/repo.service.js',
                        'test/specs/repo.service.spec.js'
                    ]
                }
            }

        }

    });

    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', [ 'karma' ]);

};
