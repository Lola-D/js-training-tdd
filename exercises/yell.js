'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
const yell = (s) => { return s.toUpperCase() }
    //* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell('str'), 'STR');
assert.strictEqual(yell('qsdqsdqsd'), 'QSDQSDQSD');
assert.strictEqual(yell('STR'), 'STR');
assert.strictEqual(yell('zapZAP'), 'ZAPZAP');
// End of tests */