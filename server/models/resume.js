'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports =
    mongoose.model('Resume', {
        personal_info: {
            fullName: String,
            preferredName: String,
            contactNumber: String
        },
        personal_interest: String ,
        work_strength: String,
        work_experience: String,
        work_skills: String,
        job_interests: String,
        how_to_support: String,
        job_requests: String,
        interested_industries: [],
    }  
    
    )