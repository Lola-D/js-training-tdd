'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
const keepFirst = (s) => {
    return s.substring(0, 2)
}

const keepLast = (s) => {
    return s.slice(5)
}

const keepFirstLast = (s) => {
        return s.substring(2, 4)
    }
    //* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(typeof keepLast, 'function');
assert.strictEqual(typeof keepFirstLast, 'function');
assert.strictEqual(keepFirst('hello'), 'he');
assert.strictEqual(keepLast('goodbye'), 'ye');
assert.strictEqual(keepFirstLast('amazing'), 'az');
// End of tests */