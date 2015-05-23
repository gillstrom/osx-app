'use strict';
var test = require('ava');
var osxApp = require('./');

test('Safari', function (t) {
	t.plan(5);

	osxApp('Safari', function (err, res) {
		t.assert(!err, err);
		t.assert(typeof res === 'object');
		t.assert(res.path);
		t.assert(res.version);
		t.assert(res.bundle);
	});
});
