'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports =
    mongoose.model('Employer', {
        industry: String,
        name: String,
        email: String
    })