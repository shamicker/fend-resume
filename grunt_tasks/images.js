module.exports = function(grunt) {
  grunt.config.merge({

    responsive_images: {

      IPND: {
        options: {
          sizes: [
            {
              // width: 320,
              height: 240,
              // quality: 90,
              name: 'tiny',
              aspectRatio: false
              // gravity: "North"
            },{
              // width: 640,
              height: 360,
              name: 'small',
              // quality: 40
              aspectRatio: false
              // gravity: "Northwest"
            },{
              // width: 960,
              height: 540,
              name: 'med',
              // quality: 90
              aspectRatio: false
              // gravity: "Northwest"
            },{
              // width: 1280,
              height: 800,
              name: 'large',
              // quality: 90
              aspectRatio: false
              // gravity: "Northwest"
            }
          ]
        },
        files: [{
          expand: true,
          cwd: 'src/images',
          src: ['./IPND_*.png'],
          dest: 'src/images/projects'
        }]
      },

      // logo: {
      //   options: {
      //     sizes: [{
      //       width: 250,
      //       height: 200
      //     }]
      //   },
      //   files: [{
      //     expand: true,
      //     cwd: 'src/img/current',
      //     src: ['hipster_logo*.png'],
      //     dest: 'build/images/'
      //   }]
      // }

    },
    // ^^^ end responsive_images

    img: {
      indFiles: {
        src: ['src/images/favicon.png', 'src/images/hipster_logo_cropped.png', 'src/images/sketch.jpg'],
        dest: 'build/images'
      },
      projects: {
        src: 'src/images/projects/*.png',
        dest: 'build/images/projects'
      },
      textures: {
        src: 'src/images/transparent\ textures/*.png',
        dest: 'build/images/textures'
      }
    }

  });
};
