'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports =
    mongoose.model('User', {
        // _id (with the undersocre) is to override the default id type to String, then maybe we can use email as id
        _id: String,
        password: String,
        salt: String,
        firstName: String,
        lastName: String,
        email: String,
        contact: String,
        resume: {type: mongoose.Schema.Types.ObjectId, ref: 'Resume'}
    })