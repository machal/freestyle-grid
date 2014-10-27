module.exports = function(grunt) {

  grunt.initConfig({   

  	less: {
	  	development: {
		    files: {
		      "css/less-block-grid.css": "less/less-block-grid.less"
		    }
	  	}
	},

    watch: {
      files: ['less/less-block-grid.less'],
      tasks: ['less']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'watch']);

};