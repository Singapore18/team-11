'use strict'

// To hanlde file upload, e.g. pictures
var multer = require('multer')
// upload = multer({dest: './uploads/'})

var jwt = require('jsonwebtoken'),
    jwtSecret = 'A Random String to Encrypt Login Session, no worries now';

    //Import the controller that contains functions
var userController = require('../controllers/user');
var questionController = require('../controllers/question');
// The API itself
module.exports = (app, passport) => {

    // Math request url to certain pattern to call a particular function to hanlde it
    app.post('api/users', userController.createUser(res, req));
    // :id is a "path parameter", frontend will put a user id here so we can get one user for them
    app.get('api/users/:id', userController.getUser(res, req));

    app.post('api/employer', employerController.createEmployer(res,req));

    app.get('api/employers/:id', employerController.getEmployer(res, req));


    app.post('api/questions', questionController.parseResponse(res,req));

    app.post('api/jobPosting', jobPostingController.showPosting(res,req));



    //TODO 
}