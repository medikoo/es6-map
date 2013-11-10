# es6-map
## Map collection as specified in ECMAScript6

### Usage

If you want to make sure your environment implements `Map`, do:

```javascript
require('es6-map/implement');
```

If you'd like to use native version when it exists and fallback to polyfill if it doesn't, but without implementing `Map` on global scope, do:

```javascript
var Map = require('es6-map');
```

If you strictly want to use polyfill even if native `Map` exists, do:

```javascript
var Map = require('es6-map/polyfill');
```

#### API

Best is to refer to [specification](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-map-objects). Still if you want quick look, follow examples:

```javascript
var Map = require('es6-map');

var x = {}, y = {}, map = new Map([['raz', 'one'], ['dwa', 'two'], [x, y]]);

map.size;                 // 3
map.get('raz');           // 'one'
map.get(x);               // y
map.has('raz');           // true
map.has(x);               // true
map.has('foo');           // false
map.set('trzy', 'three'); // map
map.size                  // 4
map.get('trzy');          // 'three'
map.has('trzy');          // true
map.has('dwa');           // true
map.delete('dwa');        // true
map.size;                 // 3

map.forEach(function (value, key) {
  // { 'raz', 'one' }, { x, y }, { 'trzy', 'three' } iterated
});

// FF nightly only:
for (value of map) {
 // ['raz', 'one'], [x, y], ['trzy', 'three'] iterated
}

var iterator = map.values();

iterator.next(); // { done: false, value: 'one' }
iterator.next(); // { done: false, value: y }
iterator.next(); // { done: false, value: 'three' }
iterator.next(); // { done: true, value: undefined }

map.clear(); // undefined
map.size; // 0
```

### Installation
#### NPM

In your project path:

	$ npm install es6-map

##### Browser

You can easily bundle _es6-map_ for browser with [modules-webmake](https://github.com/medikoo/modules-webmake)

## Tests [![Build Status](https://travis-ci.org/medikoo/es6-map.png)](https://travis-ci.org/medikoo/es6-map)

	$ npm test
