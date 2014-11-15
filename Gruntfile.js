module.exports = function(grunt) {

  grunt.initConfig({

    // Compile LESS source to CSS
  	less: {
	  	development: {
		    files: {
		      'css/freestyle-grid.css': 'less/freestyle-grid.less'
		    }
	  	}
	  },

    // Generate minified CSS
    cssmin: {
      add_banner: {
        options: {
          banner: '/* Freestyle Grid */'
        },
        files: {
          'css/freestyle-grid.min.css': ['css/freestyle-grid.css']
        }
      }
    },

    // Watch LESS file and fire compilation on its change
    watch: {
      files: ['less/freestyle-grid.less'],
      tasks: ['less', 'cssmin']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['less', 'cssmin', 'watch']);

};
