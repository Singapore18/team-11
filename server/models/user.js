'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports =
    mongoose.model('User', {
        _id: String,
        personalInfo: {
            fullName: String,
            preferredName: String,
            contactNumber: String,
        },
        answers: [{
            question: Number,
            answers: [],
        }
        ]
    })