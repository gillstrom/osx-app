'use strict';
const appPath = require('app-path');
const bundleId = require('bundle-id');
const osxAppVersion = require('osx-app-version');
const appSize = require('app-size');

module.exports = app => {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('Only OS X is supported'));
	}

	if (typeof app !== 'string') {
		return Promise.reject(new Error('Application is required'));
	}

	return Promise.all([osxAppVersion(app), bundleId(app), appPath(app), appSize(app)]).then(res => {
		return {
			path: res[2],
			version: res[0],
			bundle: res[1],
			size: res[3]
		};
	});
};
