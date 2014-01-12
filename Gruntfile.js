module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'watch']);

};