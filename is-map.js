'use strict';

var toString = Object.prototype.toString

  , id = '[object Map]'
  , Global = (typeof Map === 'undefined') ? null : Map;

module.exports = function (x) {
	return (x && ((Global && (x instanceof Global)) ||
			(toString.call(x) === id) || (x['@@toStringTag'] === 'Map'))) || false;
};
