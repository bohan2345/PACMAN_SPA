define(function(require) {
	// Load any app-specific modules
	// with a relative require call,
	// like:
	var msg = require('app/messages');

	// Load library/vendor modules using
	// full IDs, like:
	var print = require('print');

	print(msg.getHello());
	var x = $('h1').text();
	print(x);
	require('jquery_ui');
	$("#dialog").dialog();
});
