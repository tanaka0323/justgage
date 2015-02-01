module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            fb : {
                src : [
                    'justgage.js'
                ],
                dest : 'justgage.min.js'
            }
        },
        uglify : {
            fb: {
                files: {
                    'justgage.min.js' : [ 'justgage.js' ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', [ 'concat:fb', 'uglify:fb' ]);
};
