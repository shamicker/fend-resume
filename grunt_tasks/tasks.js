module.exports = function(grunt) {
	grunt.config.merge({

		jshint: {
			options: {
				"eqeqeq": true,
				reporterOutput: 'build/report.js'
			},
			all: ['gruntfile.js', 'src/js/helper.js', 'src/js/resumeBuilder.js', 'src/js/extras.js', 'grunt_tasks/*.js']
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
				src: ['src/css/normalize.css', 'src/css/style.css'],
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