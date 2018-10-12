'use strict'

var mongoose = require('mongoose'),
    Schame = mongoose.Schema;

module.exports =
    mongoose.model('User', {
        _id: String,
        firstName: String,
        lastName: String
    })