'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
const jadenCase = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

//return s[0].toUpperCase() + s.slice(1).toLowerCase()
//* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(keepFirst('Je passe une bonne journée.'), 'Je Passe Une Bonne Journée.');
assert.strictEqual(keepLast("C'est chiant d'être confiné."), "C'est Chiant D'être Confiné.");

// End of tests */