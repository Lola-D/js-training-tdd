'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutFirst = (s) => {
    return s.slice(1)
}

const cutLast = (s) => {
    return s.slice(0, -1)
}

const cutFirstLast = (s) => {
        return s.slice(1, -1)
    }
    //* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(typeof cutLast, 'function');
assert.strictEqual(typeof cutFirstLast, 'function');
assert.strictEqual(curFirst('string'), 'tring');
assert.strictEqual(cutLast('qsdqsdqsd'), 'qsdqsdqs');
assert.strictEqual(cutFirstLast('string'), 'ri');

// End of tests */