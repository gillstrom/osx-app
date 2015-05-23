'use strict';
var execFile = require('child_process').execFile;
var eachAsync = require('each-async');
var appPath = require('app-path');
var bundleId = require('bundle-id');
var osxAppVersion = require('osx-app-version');

module.exports = function (app, cb) {
	if (process.platform !== 'darwin') {
		throw new Error('Only OS X systems are supported');
	}

	if (typeof app !== 'string') {
		throw new Error('Application is required');
	}

	var obj = {};

	eachAsync([osxAppVersion, bundleId, appPath], function (fn, index, done) {
		fn(app, function(err, res) {
			if (err) {
				done(err);
			}

			if (index === 0) {
				obj.version = res;
			} else if (index === 1) {
				obj.bundle = res;
			} else {
				obj.path = res;
			}

			done();
		});
	}, function (err) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, obj);
	});
};
