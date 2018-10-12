'use strict'

// To hanlde file upload, e.g. pictures
var multer = require('multer')
// upload = multer({dest: './uploads/'})

var jwt = require('jsonwebtoken'),
    jwtSecret = 'A Random String to Encrypt Login Session, no worries now';

    //Import the controller that contains functions
var userController = require('../controllers/user');
var questionController = require('../controllers/question');
var employerController = require('../controllers/employer');
// The API itself
module.exports = (app, passport) => {

    // Math request url to certain pattern to call a particular function to hanlde it
    app.post('api/users', userController.createUser);
    // :id is a "path parameter", frontend will put a user id here so we can get one user for them
    app.get('api/users/:id', userController.getUser);
    app.get('api/employers/:id', employerController.getEmployer);

    app.post('api/questions', questionController.parseResponse);

    app.post('api/employer', employerController.createEmployer);

    //TODO 
}