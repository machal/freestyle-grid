module.exports = function(grunt) {

  grunt.initConfig({

  	less: {
	  	development: {
		    files: {
		      "css/freestyle-grid.css": "less/freestyle-grid.less"
		    }
	  	}
	},

    watch: {
      files: ['less/freestyle-grid.less'],
      tasks: ['less']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'watch']);

};
