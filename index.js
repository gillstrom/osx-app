'use strict';
var execFile = require('child_process').execFile;
var eachAsync = require('each-async');
var appPath = require('app-path');
var bundleId = require('bundle-id');
var osxAppVersion = require('osx-app-version');
var appSize = require('app-size');

module.exports = function (app, cb) {
	if (process.platform !== 'darwin') {
		throw new Error('Only OS X systems are supported');
	}

	if (typeof app !== 'string') {
		throw new Error('Application is required');
	}

	var obj = {};

	eachAsync([osxAppVersion, bundleId, appPath, appSize], function (fn, index, done) {
		fn(app, function(err, res) {
			if (err) {
				done(err);
			}

			if (index === 0) {
				obj.version = res;
			} else if (index === 1) {
				obj.bundle = res;
			} else if (index === 2) {
				obj.path = res;
			} else {
				obj.size = res;
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
