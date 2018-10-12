'use strict'

var mongoose = require('mongoose'),
    Schame = mongoose.Schema;

module.exports =
    mongoose.model('User', {
        // _id (with the undersocre) is to override the default id type to String, then maybe we can use email as id
        _id: String,
        password: String,
        salt: String,
        firstName: String,
        lastName: String,
        email: String,
        resume: {type: Mongoose.Schema.Types.ObjectId, ref: 'Resume'}
    })