module.exports = function(grunt) {
	grunt.config.merge({

		jshint: {
			options: {
				"eqeqeq": true,
				reporterOutput: 'build/report.js'
			},
			all: ['gruntfile.js', 'src/js/helper.js', 'src/js/resumeBuilder.js', 'grunt_tasks/*.js']
		},

		postcss: {
			autoprefix: {
				options: {
					// diff: 'build/css/report.css',
					processors: [require('autoprefixer')({browsers: 'last 2 versions'})]
					// map: true
				},
				src: ['src/css/*.css'],
				dest: 'build/css/style.css'
			},
			minify: {
				options: {
					// diff: 'build/css/report2.css',
					processors: [require('cssnano')()]
				},
				src: ["<%= postcss.autoprefix.dest %>"],
				dest: 'build/css/style.css'
			}
		// },

		// concat: {
		// 	options: {
		// 		separator: ';\n'
		// 	},
		// 	dist: {
		// 		src: ['src/js/*.js'],
		// 		dest: 'build/js/all.js',
		// 		nonull: true
		// 	}
		}

	});
};