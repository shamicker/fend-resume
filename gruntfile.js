module.exports = function(grunt) {

  // load tasks!
  require('load-grunt-tasks')(grunt);

  // configure tasks!
  // require('./grunt_tasks/css.js')(grunt);
  // require('./grunt_tasks/javascript.js')(grunt);
  require('./grunt_tasks/images.js')(grunt);
  // require('./grunt_tasks/pagespeed.js')(grunt);
  require('./grunt_tasks/watch_connect.js')(grunt);
  require('./grunt_tasks/copy.js')(grunt);
  require('./grunt_tasks/tasks.js')(grunt);


  grunt.registerTask('live', ['connect', 'watch']);

  grunt.registerTask('refactor', ['jshint', 'copy']);
  grunt.registerTask('default', [
    'clean',
    'jshint',
    'responsive_images',
    'copy',
    'img',
    // 'sass',
    'concat',
    'postcss',
    // 'csslint',
    // 'copy'
    // 'pagespeed',
    'live'
    ]);

};

//  TODO : add in uglify and concat
