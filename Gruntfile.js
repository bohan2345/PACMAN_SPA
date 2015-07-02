module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		handlebars : {
			compile : {
				options : {
					// configure a namespace for your templates
					namespace : 'CMT.templates',
					partialsUseNamespace : true,
					// This option accepts a function which takes one argument
					// (the partial filepath) and returns a string which will be
					// used as the key for the precompiled partial object
					// when it is registered in Handlebars.partials.
					processPartialName : function(filePath) {
						var pieces = filePath.split("/");
						var page = pieces[pieces.length - 2];
						var n = pieces[pieces.length - 1].split('.')[0];
						return page + "/" + n;
					},
					// convert file path into a function name
					// in this example, I convert grab just the filename
					// without the extension
					processName : function(filePath) {
						var pieces = filePath.split('/');
						var page = pieces[pieces.length - 2];
						var n = pieces[pieces.length - 1].split('.')[0];
						return page + "_" + n;
					}
				},
				// output file: input files
				files : {
					'www/template/template.js' : 'www/template/**/*.hbs'
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-handlebars");

	grunt.registerTask("default", [ "handlebars" ]);
};