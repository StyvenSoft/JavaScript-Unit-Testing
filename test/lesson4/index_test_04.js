const assert = require('assert');
const Calculate = require('../index.js')

describe('Calculate', () => {
    describe('.sum', () => {
        it('returns the sum of an array of numbers', () => {
            const expectedResult = 22;
            const inputArray = [4, 5, 6, 7]

            const result = Calculate.sum(inputArray)

            assert.equal(result, expectedResult);
        });

        // Second test goes here

    });
});