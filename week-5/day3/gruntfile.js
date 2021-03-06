
module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        // all of our TASK configuration goes in here

        // This is the general format for ANY task config in grunt
        // taskName: {
        //     options: {
        //         optionA: 0
        //     },
        //     targetA: {
        //         property: 'value',
        //         options: {
        //             optionA: 1,
        //             optionB: 1
        //         }
        //     },
        //     targetB: {}
        // }

        clean: [ 'build/' ],

        jshint: {  // the task name is defined by plugin
            options: {
                jshintrc: '.jshintrc',
                ignores: [ 'node_modules/**' ]
            },
            source: {  // this target name is arbitrary! you can make it up
                files: {
                    src: [ 'src/js/**/*.js' ]
                }
            },
            test: {
                files: {
                    src: [ 'test/specs/**/*.js' ]
                }
            }

        },

        sass: {  // task name
            allStyles: {  // target name
                files: {
                    'build/css/styles.css': 'src/sass/main.scss'
                }
            }
        },

        copy: {
            html: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: [ 'index.html' ],
                        dest: 'build/'
                    }
                ]
            },
            vendorjs: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/jquery/dist/',
                        src: [ 'jquery.js' ],
                        dest: 'build/js/'
                    }
                ]
            }
        },

        concat: {
            js: {
                src: [ 'src/js/**/*.js' ],
                dest: 'build/js/app.js'
            }
        },

        connect: {
            testing: {
                options: {
                    port: 8888,
                    base: '.'
                }
            }
        },

        mocha: {
            all: {
                options: {
                    urls: [
                        'http://localhost:8888/test/repo-search.html'
                    ]
                }
            }
        },

        watch: {
            html: {
                files: ['src/index.html'],
                tasks: ['copy:html']
            },
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['test', 'concat']
            },
            sass: {
                files: ['src/sass/**/*.scss'],
                tasks: ['sass']
            },
            test: {
                files: ['test/specs/**/*.js', 'test/*.html'],
                tasks: ['test']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask( 'test', [ 'jshint', 'connect', 'mocha' ] );
    grunt.registerTask( 'default', [ 'clean', 'test', 'sass', 'copy', 'concat' ] );

};
