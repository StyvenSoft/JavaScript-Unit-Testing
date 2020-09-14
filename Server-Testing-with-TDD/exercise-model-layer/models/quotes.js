// models/quote.js
const { mongoose } = require('../database');

const quoteSchema = new mongoose.Schema({
    quote: String
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;