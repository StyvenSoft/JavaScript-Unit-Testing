const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema here

module.exports = mongoose.model('Dinosaur', DinosaurSchema);