module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src: 'js/bootstrap.js',
                dest: 'js/bootstrap.min.js'
            }
        },
        imagemin: {                          // Task
            dynamic: {                         // Another target
              files: [{
                expand: true,                  // Enable dynamic expansion
                cwd: 'images/',                   // Src matches are relative to this path
                src: ['feed_reader.JPG', 'resume.JPG', 'movie_trailor.JPG'],   // Actual patterns to match
                dest: 'images/dist/'                  // Destination path prefix
              }]
            }
          },
        responsive_images: {
            dev: {
                options: {
                    engine: 'im'
                },
                sizes: [{
                    width: 320,
                    height: 240
                },{
                    name: 'large',
                    width: 640,
                    height: 480
                },{
                    name: "large",
                    width: 1024,
                    height: 698,
                    suffix: "_x2",
                    quality: 0.6
                }],
                files: [{
                    expand: true,
                    cwd: 'images/dist',
                    src: ['feed_reader.JPG', 'resume.JPG', 'movie_trailor.JPG'],
                    dest: 'images/resp/'
                }]
            }
        }
        copy: {
            dev: {
                files: [{
                    expand: true,
                    src: ['**', 'images/*.*'],
                    cwd: 'src/',
                    dest: 'dist/'
                }]
            }
        }
        cssmin: {
          css: {
            files: {
              'css/portfolio-main.min.css': ['css/portfolio-main.css']
            }
          }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['cssmin',
                                    'responsive_images',
                                    'uglify',
                                    'imagemin',
                                    'copy']);
};
