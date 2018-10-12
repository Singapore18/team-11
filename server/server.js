'use strict'

// This this the entry point of the server

const config = require('./config'),
    PORT = config.server.http_port,
    ROUTES = config.server.routes,
    DB_ADDR = config.db.addr;

var express = require('express'),
    app = express(),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    MongoStore = require('connect-mongo')(session);


// Mongoose a package to query MongoDB data
var mongoose = require('mongoose');

// Load Mongoose Models 
var User = require('./models/user'),
    Resume = require('./models/resume'),
    Employer = require('./models/employer');

mongoose.Promise = global.Promise;
mongoose.connect(DB_ADDR, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require(ROUTES);
routes(app);

app.listen(PORT);