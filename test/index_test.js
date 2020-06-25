var assert = require("assert");
var Calculate = require('../index.js')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('Return corrects value of 5!', () => {

            // setup
            const inputNumber = 5;
            const expectedResult = 120;

            const result = Calculate.factorial(inputNumber);
            assert.equal(result, expectedResult);
        });

        it('Return corrects value of 3!', () => {

            // setup
            const inputNumber = 3;
            const expectedResult = 6;

            const result = Calculate.factorial(inputNumber);
            assert.equal(result, expectedResult);
        });

        it('Return corrects value of 0!', () => {

            // setup
            const inputNumber = 0;
            const expectedResult = 1;

            // exercise
            const result = Calculate.factorial(inputNumber);

            // verify
            assert.equal(result, expectedResult);
        })
    });
});