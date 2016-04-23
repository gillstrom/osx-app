'use strict';
var test = require('ava');
var osxApp = require('./');

test('Safari', function (t) {
	t.plan(5);

	osxApp('Safari').then(function (res) {
		t.assert(typeof res === 'object');
		t.assert(res.path);
		t.assert(res.version);
		t.assert(res.bundle);
		t.assert(res.size);
	});
});
