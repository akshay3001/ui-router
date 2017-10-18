module.exports = function (grunt) {
  require('jit-grunt')(grunt);
  grunt.initConfig({

    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "dist/css/common/common.css": ["less/common/common.less", "less/common/login.less", "less/common/dashboard.less", "less/common/cust-dashboard.less"],
          "dist/bootstrap/bootstrap.css": "less/bootstrap/bootstrap.less",
          "dist/font/font-awesome.css": "font/less/font-awesome.less" // destination file and source file
        }
      }
    },

    /*
      This uncss and cssmin is used to remove unused css and minify css files and make them in one css file.
      uncss: {
        dist: {
            files: [
                { src: 'view/login.html', dest: 'uncss_and_cssmin/tidy.css' }
            ]
        }
    },
    cssmin: {
      dist: {
          files: [
              { src: 'uncss_and_cssmin/tidy.css', dest: 'cleancss/tidy.css' }
          ]
      }
  },*/

  //copy: {
  //files: {
  //cwd: 'images', // set working folder / root to copy
  //src: ['**/*.jpg', '**/*'], // copy all files and subfolders
 // dest: 'dist/images', // destination folder
  //expand: true // required when using cwd
 // }
  //}, 
   
  /*
  for copying multipe folders remove currrent working directory*/
    copy: {
    files: {
    src: ['view/**/*','documentation'], // copy all files and subfolders
    dest: 'dist/mhatre', // destination folder
    expand: true // required when using cwd
    }
    },



    cssmin: {
      target: {
        files: [{
          expand: true,
          src: ['akshay/bootstrap/*.css', '!*.min.css'],
          dest: 'akshay/',
          ext: '.min.css'
        }]
      }
    },


    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  //grunt.loadNpmTasks('grunt-uncss');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['less', 'copy', 'watch']);
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //grunt.registerTask('default', ['uncss', 'cssmin']);
};