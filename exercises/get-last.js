'use strict';

/*
 * Create a `getLast` function that takes an array or a string
 * and return the last element.
 *
 * @notions Data-Structures, Get
 */

// Your code:
const getLast = (a) => {
        let last = 0
        if (a === undefined) {
            return undefined
        } else if (typeof a === 'string') {
            return last = a.slice(-1)
        } else {
            return last = a.pop()
        }
    }
    //* Begin of tests
const assert = require('assert');

assert.strictEqual(getLast([2, 42]), 42);
assert.strictEqual(getLast(['pouet', 4, true]), true);
assert.strictEqual(getLast([getLast]), getLast);
assert.strictEqual(getLast('salut'), 't');
assert.strictEqual(getLast([]), undefined);
// End of tests */