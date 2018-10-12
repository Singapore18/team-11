'use strict'

var mongoose = require('mongoose'),
    Schame = mongoose.Schema;

module.exports =
    mongoose.model('Resume', {
       personalInterest: String,
       workInterest: String,
       experience: String,
       instruction: String,
       createdAt: Date
    })