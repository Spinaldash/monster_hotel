'use strict';

var mongoose = require('mongoose');

var monsterSchema = mongoose.Schema({
    name: String,
    image: String,
    age: Number,
    gender: String,
    species: String,
    color: String,
    description: String
    isAdopted: {type: Boolean, default: false}
});

module.exports = mongoose.model('Monster', monsterSchema);
