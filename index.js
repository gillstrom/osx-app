'use strict';
var execFile = require('child_process').execFile;
var appPath = require('app-path');
var osxAppVersion = require('osx-app-version');
var osxBundle = require('osx-bundle');

module.exports = function (app, cb) {
	if (process.platform !== 'darwin') {
		throw new Error('Only OS X systems are supported');
	}

	if (typeof app !== 'string') {
		throw new Error('Application is required');
	}

	var obj = {};

	appPath(app, function (err, path) {
		if (err) {
			cb(err);
			return;
		}

		obj.path = path;

		osxAppVersion(path, function (err, version) {
			if (err) {
				cb(err);
				return;
			}

			obj.version = version;

			osxBundle(path, function (err, bundle) {
				if (err) {
					cb(err);
					return;
				}

				obj.bundle = bundle;

				cb(null, obj);
			});
		});
	});
};
