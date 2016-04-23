#!/usr/bin/env node
'use strict';
var capitalize = require('capitalize');
var chalk = require('chalk');
var meow = require('meow');
var prettyBytes = require('pretty-bytes');
var osxApp = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ osx-app Safari'
	]
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

	res.size = prettyBytes(res.size);

	Object.keys(res).forEach(function (el) {
		console.log('  ' + chalk.bold(capitalize(el)) + '  \t' + res[el]);
	});
});
