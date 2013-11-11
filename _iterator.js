'use strict';

var setPrototypeOf = require('es5-ext/object/set-prototype-of')
  , primitiveSet   = require('es5-ext/object/primitive-set')
  , d              = require('d/d')
  , Iterator       = require('es6-iterator')

  , defineProperties = Object.defineProperties
  , kinds = primitiveSet('key', 'value', 'key+value')
  , unBind = Iterator.prototype._unBind
  , MapIterator;

MapIterator = module.exports = function (map, kind) {
	if (!(this instanceof MapIterator)) return new MapIterator(map, kind);
	Iterator.call(this, map.__mapKeysData__, map);
	if (!kind || !kinds[kind]) kind = 'key+value';
	defineProperties(this, {
		__kind__: d('', kind),
		__values__: d('w', map.__mapValuesData__)
	});
};
if (setPrototypeOf) setPrototypeOf(MapIterator, Iterator);

MapIterator.prototype = Object.create(Iterator.prototype, {
	constructor: d(MapIterator),
	_resolve: d(function (i) {
		if (this.__kind__ === 'value') return this.__values__[i];
		if (this.__kind__ === 'key') return this.__list__[i];
		return [this.__list__[i], this.__values__[i]];
	}),
	_unBind: d(function () {
		this.__values__ = null;
		unBind.call(this);
	}),
	'@@toStringTag': d('c', 'Map Iterator'),
	toString: d(function () { return '[object Map Iterator]'; })
});
