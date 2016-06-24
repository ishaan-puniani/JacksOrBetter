module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: ['css/*.css'],
                dest: 'dist/production<%= pkg.version %>.css'
            },
            js: {
                src: ['javascript/vendor/*.js', 'javascript/*.js'],
                dest: 'dist/production<%= pkg.version %>.js'
            }
        },
        cssmin: {
            css: {
                src: 'dist/production<%= pkg.version %>.css',
                dest: 'dist/production<%= pkg.version %>.min.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n'+
                        '* @version <%= pkg.version %> \n'+
                        '* @license  \n'+
                        '* Visit http://gameolive.com/ \n'+ 
                        '* \n'+
                        '* Distributed under the terms of the MIT license.\n'+
                        '* http://www.opensource.org/licenses/mit-license.html\n'+
                        '*\n'+
                        '* This notice shall be included in all copies or substantial portions of the Software. */'
            },
            js: {
                src: 'dist/production<%= pkg.version %>.js',
                dest: 'dist/production<%= pkg.version %>.min.js'
            }
        },
        watch: {
            css: {
                files: ['css/*.css'],
                tasks: ['concat:css', 'cssmin:css']
            },
            js: {
                files: ['javascript/vendor/*.js', 'javascript/*.js'],
                tasks: ['concat:js', 'uglify:js']
            }
        }
    });

    // 2. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);

};