#!/usr/bin/env node
'use strict';
const capitalize = require('capitalize');
const chalk = require('chalk');
const meow = require('meow');
const prettyBytes = require('pretty-bytes');
const osxApp = require('./');

const cli = meow(`
	Example
	  $ osx-app Safari
`);

if (cli.input.length === 0) {
	console.error('Application is required');
	process.exit(1);
}

osxApp(cli.input[0]).then(res => {
	res.size = prettyBytes(res.size);
	Object.keys(res).forEach(x => console.log(`  ${chalk.bold(capitalize(x))}  \t${res[x]}`));
});
