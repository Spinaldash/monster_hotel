'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
    name: String,
    image: String,
    age: Number,
    gender: String,
    phone: String,
    email: String,
    address: String,
    lookingFor: String,
    isAdopted: {type: Boolean, default: false}
});

module.exports = mongoose.model('Monster', monsterSchema);