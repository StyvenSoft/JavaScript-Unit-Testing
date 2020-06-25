var assert = require("assert");
var Calculate = require('../index.js')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('Return corrects value of 5!', () => {

            // setup
            const inputNumber = 5;
            const expectedResult = 120

            const result = Calculate.factorial(inputNumber);
            assert.equal(Calculate.factorial(5), 120);
        })
    });
});