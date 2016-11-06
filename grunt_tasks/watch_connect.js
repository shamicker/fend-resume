// Images and pagespeed

module.exports = function(grunt) {
  grunt.config.merge({

    connect: {
      // uses_defaults: {}
      server: {
        options: {
          hostname: 'localhost',
          port: 4010,
          // base: 'build/',
          // locale: en_GB,
          // threshold: 70
          livereload: true
          // base: '0.0.0.0'
        }
      }
    },

    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      // scripts: {
      javascript: {
        files: ['gruntfile.js', 'grunt_tasks/*.js', 'src/js/*.js'],
        tasks: ['jshint', 'copy:js'],
        options: {
          forever: false,
          dateFormat: function(time) {
            grunt.log.writeIn('Watch took', time, 'ms to complete!');
            grunt.log.writeIn('Now waiting for more changes...');
          }
        }
      },
      html: {
        files: 'index.html',
        tasks: ['watch']
      },
      css: {
        files: ['src/css/*.css'],
        tasks: ['postcss']
      }
    }

  });
};
