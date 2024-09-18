import {describe, expect, test} from '@jest/globals';
import { checkISBN } from './isbn';

describe('ISBN module', () => {

    // --- TO DELETE

    test('should verify if 2+2 = 4', () => {
        expect(2 + 2).toBe(4);
    })

    test('should pass if 2+2 != 5', () => {
        expect(2 + 2).not.toBe(5);
    })

    test('should not throw', () => {
        expect(() => {
            checkISBN('123')
        }).not.toThrow();
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
