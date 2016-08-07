const assert = require('assert');
const proxyHideProperties = require('./');

const example = proxyHideProperties({ foo: 1, bar: 2, baz: 3 }, 'foo', 'bar');
assert.equal(example.foo, 1);
assert.equal(example.bar, 2);
assert.equal(example.baz, 3);
assert.equal('foo' in example, false);
assert.equal('bar' in example, false);
assert.equal('baz' in example, true);
assert.equal(example.hasOwnProperty('foo'), false);
assert.equal(example.hasOwnProperty('bar'), false);
assert.equal(example.hasOwnProperty('baz'), true);
assert.equal(Object.keys(example).indexOf('foo'), -1);
assert.equal(Object.keys(example).indexOf('bar'), -1);
assert.equal(Object.keys(example).indexOf('baz'), 0);
assert.equal(typeof Object.getOwnPropertyDescriptor(example, 'foo'), 'undefined');
assert.equal(typeof Object.getOwnPropertyDescriptor(example, 'bar'), 'undefined');
assert.equal(typeof Object.getOwnPropertyDescriptor(example, 'baz'), 'object');
assert.equal(Object.getOwnPropertyNames(example).indexOf('foo'), -1);
assert.equal(Object.getOwnPropertyNames(example).indexOf('bar'), -1);
assert.equal(Object.getOwnPropertyNames(example).indexOf('baz'), 0);
var keys = []; for (key in example) keys.push(key);
assert.equal(keys.indexOf('foo'), -1);
assert.equal(keys.indexOf('bar'), -1);
assert.equal(keys.indexOf('baz'), 0);


console.log('All Pass :)');
