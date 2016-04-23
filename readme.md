# osx-app [![Build Status](https://travis-ci.org/gillstrom/osx-app.svg?branch=master)](https://travis-ci.org/gillstrom/osx-app)

> Get information about an app in OS X systems.


## Install

```
$ npm install --save osx-app
```


## Usage

```js
const osxApp = require('osx-app');

osxApp('Safari').then(res => {
	console.log(res);
	/*
	{
		path: '/Applications/Safari.app',
		bundle: 'com.apple.Safari',
		size: 34058118,
		version: '8.0.6'
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

  Example
    $ osx-app Safari
```


## License

MIT © [Andreas Gillström](https://github.com/gillstrom)
