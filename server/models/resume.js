'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports =
    mongoose.model('Employer', {
        
        personal_interest: String ,
        work_strength: String,
        work_experience: String,
        work_skills: String,
        job_interests: String,
        how_to_support: String,
        job_requests: String,
        interested_industries: [],
        name: String,
        email: String
    }  
    
    )