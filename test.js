'use strict';
var test = require('ava');
var osxApp = require('./');

test('Safari', function (t) {
	t.plan(6);

	osxApp('Safari', function (err, res) {
		t.assert(!err, err);
		t.assert(typeof res === 'object');
		t.assert(res.path);
		t.assert(res.version);
		t.assert(res.bundle);
		t.assert(res.size);
	});
});
