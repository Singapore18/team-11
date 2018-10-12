'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports =
    mongoose.model('Question', {
        // _id (with the undersocre) is to override the default id type to String, then maybe we can use email as id
        // _id: String, 
        question: String,
        answers: []
    })