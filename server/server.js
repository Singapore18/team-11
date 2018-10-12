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

// Passport.js is used to handle authentication (login etc.)
var passport = require('passport'),
    LocalStratagy = require('passport-local').Strategy,
    passportJwt = require('passport-jwt'),
    JwtStrategy = passportJwt.Strategy,
    ExtractJwt = passportJwt.ExtractJwt;

// Mongoose a package to query MongoDB data
var mongoose = require('mongoose');

// Load Mongoose Models 
var User = require('./models/user'),
    Resume = require('./models/resume'),
    Question = require('./models/question'),
    Employer = require('./models/employer'),
    JobPosting = require('./models/jobPosting');

    //A dummy record to create db
    JobPosting.create({
        industry: "-",
        companyName: "-",
        postingName: "-",
        description: "-"
    })

mongoose.Promise = global.Promise;
mongoose.connect(DB_ADDR, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());

var routes = require(ROUTES);
routes(app, passport);

app.listen(PORT);