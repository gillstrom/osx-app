#!/usr/bin/env node
'use strict';
var meow = require('meow');
var osxApp = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ osx-app Safari'
	].join('\n')
});

if (!cli.input.length) {
	console.error('Application is required');
	process.exit(1);
}

osxApp(cli.input[0], function (err, res) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(res);
});
