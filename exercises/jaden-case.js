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
    let w = s.split(' ')
    let t = []
    for (let i = 0; i < w.length; i++) {
        t.push(w[i][0].toUpperCase() + w[i].slice(1))
    }
    return t.join(' ')
}

//return s[0].toUpperCase() + s.slice(1).toLowerCase()
//* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase('Je passe une bonne journée.'), 'Je Passe Une Bonne Journée.');
assert.strictEqual(jadenCase("C'est chiant d'être confiné."), "C'est Chiant D'être Confiné.");

// End of tests */