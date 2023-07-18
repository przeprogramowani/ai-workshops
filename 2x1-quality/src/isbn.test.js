// https://nodejs.org/api/test.html#test-runner
// https://nodejs.org/api/assert.html#assert

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { checkISBN } from './isbn.js';

describe('ISBN module', () => {

    // --- TO DELETE

    it('should verify if 2+2 = 4', () => {
        assert.strictEqual(2 + 2, 4);
    })

    it('should pass if 2+2 != 5', () => {
        assert.notStrictEqual(2 + 2, 5);
    })

    it('should not throw', () => {
        assert.doesNotThrow(() => {
            checkISBN('123')
        })
    });

    // --- TO DELETE

    // Unit Test - Case 1
    // ...

    // Unit Test - Case 2
    // ...

    // Unit Test - Case 3
    // ...

    // Unit Test - Case 4
    // ...

    // Unit Test - Case 5
    // ...

});
