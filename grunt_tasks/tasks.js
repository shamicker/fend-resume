module.exports = function(grunt) {
	grunt.config.merge({

		jshint: {
			options: {
				"eqeqeq": true,
				// "esnext": true,
				"esversion": 6,
				reporterOutput: 'build/report.js'
			},
			all: [
				'gruntfile.js',
				'grunt_tasks/*.js',
				'src/js/*.js',
				'!src/js/bootstrapModal.js',
				'!src/js/jQuery.js'
				]
		},

		concat: {
			options: {
				separator: ';\n'
			// },
			// js: {
			// 	src: ['src/js/*.js'],
			// 	dest: 'build/js/all.js',
			// 	nonull: true
			},
			css: {
				src: ['src/css/normalize.css', 'src/css/style.css', 'src/css/modal.css'],
				dest: 'src/css/concat.css'
			}
		},

		postcss: {
			autoprefix: {
				options: {
					// diff: 'build/css/report.css',
					processors: [require('autoprefixer')({browsers: 'last 2 versions'})]
					// map: true
				},
				src: ['src/css/concat.css'],
				dest: 'build/css/style.css'
			},
			cssnano: {
				options: {
					// diff: 'build/css/report2.css',
					processors: [require('cssnano')()]
				},
				src: ["<%= postcss.autoprefix.dest %>"],
				dest: 'build/css/style.css'
			}
		}

	});
};