module.exports = function(grunt) {
	grunt.config.merge({

		copy: {
			// images: {
			// 	files: [{
			// 		expand: true,
			// 		cwd: 'src/images/',
			// 		src: [
			// 			'favicon.png',
			// 			'hipster_logo_cropped.png',
			// 			'sketch.jpg',
			// 			'transparent textures/*.png'
			// 		],
			// 		dest: 'build/images/'
			// 	}]
			// },

			js: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['js/*.js', '!js/contactDisplay.js'],
					dest: 'build/'
				}]
			}
		},

		clean: ["src/images/projects", "build/**"]

	});
};