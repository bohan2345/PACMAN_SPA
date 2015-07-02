// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        jquery: 'jquery',
        jquery_ui: 'jquery-ui-1.11.4/jquery-ui'
    },
    shim: {
    	'jquery_ui': {
    		exports: "$",
    		deps: ['jquery']
    	}
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);

