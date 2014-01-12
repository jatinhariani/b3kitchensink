module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'bower_components/bootstrap/dist/js/bootstrap.js'
                ],
                dest: 'app/js/main.js'
            }
        },
        less: {
            development: {
                files: {
                    'app/css/main.css': 'app/less/main.less'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            files: {
                files: ['app/index.html']
            },
            css: {
                files: ['app/less/*'],
                tasks: ['less'],
                options: {
                    spawn: false
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'less', 'watch']);

};