'use strict'

//Import the controller that contains functions
var userController = require('../controllers/user'),
    employerController = require('../controllers/employer'),
    resumeController = require('../controllers/resume');
// The API itself
module.exports = (app) => {

    // Math request url to certain pattern to call a particular function to hanlde it
    app.post('/api/users', userController.createUser);
    // :id is a "path parameter", frontend will put a user id here so we can get one user for them
    app.get('/api/users/:id', userController.getUser);
    app.get('/api/users', userController.getAllUsers);
    app.get('/api/resume/:id', resumeController.getResume);

    app.post('/api/employer', employerController.createEmployer);

}