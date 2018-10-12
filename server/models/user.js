'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports =
    mongoose.model('User', {
        fullName: String,
        preferredName: String,
        email: String,
        contact: String,
        answers: [{
            question: Number,
            answers: [],
        }
        ]
    })