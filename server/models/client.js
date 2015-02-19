'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
    name: {type: String, required: true}, //required: true means it must have a name to be saved into the database
    image: String,
    age: Number,
    gender: String,
    phone: String,
    email: String,
    address: String,
    lookingFor: String,
    pets: [{type: mongoose.Schema.ObjectId, ref:'Monster'}] // Adds a Pets Properity, which is an array of ObjectIds. ref: means the ID's must be monsters.
});

module.exports = mongoose.model('Client', clientSchema);
