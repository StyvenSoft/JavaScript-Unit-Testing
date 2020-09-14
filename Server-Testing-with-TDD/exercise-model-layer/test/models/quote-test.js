// test/models/quote-test.js
const {assert} = require('chai');
const {connectAndDrop, disconnect} = require('../../database');
const Quote = require('../../models/quote');

describe('Quote', () => {
    beforeEach(connectAndDrop);
    afterEach(disconnect);

    describe('#quote', () => {
        it('is a String', () => {
            const quoteAsInt = 1;
            const citation = new Quote({quote: quoteAsInt});

            assert.strictEqual(citation.quote, quoteAsInt.toString());
        });
    });
});