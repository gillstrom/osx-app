import test from 'ava';
import m from './';

test(async t => {
	const res = await m('Safari');
	t.truthy(res.version);
	t.regex(res.path, /Safari.app$/);
	t.regex(res.size, /\d*/);
	t.is(res.bundle, 'com.apple.Safari');
});
