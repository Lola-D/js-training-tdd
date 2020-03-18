'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
const whisper = (s) => { return s.toLowerCase() }
    //* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper('STR'), 'str');
assert.strictEqual(whisper('QSDQSDQSD'), 'qsdqsdqsd');
assert.strictEqual(whisper('StR'), 'str');
assert.strictEqual(whisper('zapZAP'), 'zapzap');
// End of tests */