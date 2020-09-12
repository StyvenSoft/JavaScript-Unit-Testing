const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validator = function (value) {
    return value <= 10;
}

// Define schema here
const DinosaurSchema = new mongoose.Schema({
    name: { type: String, required: true },
    count: {
        type: Number,
        // Define validate property here
        max: [10, 'Cannot hold more than 10 dinosaurs.']
    },
    risk: { type: String }
});

module.exports = mongoose.model('Dinosaur', DinosaurSchema);