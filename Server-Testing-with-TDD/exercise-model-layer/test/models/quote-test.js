// test/models/quote-test.js
const {assert} = require('chai');
const {mongoose, databaseUrl, options} = require('../../database');
const Quote = require('../../models/quote');

describe('Quote', () => {
    beforeEach(async () => {
        await mongoose.connect(databaseUrl, options);
        await mongoose.connection.db.dropDatabase();
    });
    afterEach(async () => {
        await mongoose.disconnect();
    });

    describe('#quote', () => {
        it('is a String', () => {
            const quoteAsInt = 1;
            const citation = new Quote({quote: quoteAsInt});

            assert.strictEqual(citation.quote, quoteAsInt.toString());
        });
    });
});