const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validator = function () {
    return false;
}

// Define schema here
const DinosaurSchema = new mongoose.Schema({
    name: { type: String, required: true },
    count: {
        type: Number,
        // Define validate property here
        validate: validator
    },
    risk: { type: String }
});

module.exports = mongoose.model('Dinosaur', DinosaurSchema);