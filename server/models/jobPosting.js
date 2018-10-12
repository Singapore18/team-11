'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports =
    mongoose.model('JobPosting', {
        industry: String,
        companyName: String,
        postingName: String,
        description: String
    })