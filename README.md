# osx-app [![Build Status](https://travis-ci.org/gillstrom/osx-app.svg?branch=master)](https://travis-ci.org/gillstrom/osx-app)

> Get information about an app (OS X)


## Install

```
$ npm install --save osx-app
```


## Usage

```js
var osxApp = require('osx-app');

osxApp('Safari', function (err, res) {
	console.log(res);
	/*
	{
		path: '/Applications/Safari.app',
		version: '8.0.6',
		bundle: 'com.apple.Safari'
	}
	*/
});
```


## CLI

```
$ npm install --global osx-app
```

```
$ osx-app --help

  Examples
    $ osx-app Safari
```


## License

MIT © [Andreas Gillström](https://github.com/gillstrom)
