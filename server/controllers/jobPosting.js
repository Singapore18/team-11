// Import mongoose to query MongoDB data
var mongoose = require('mongoose'),
// A Model, e.g. a table inside db
    JobPosting = mongoose.model('JobPosting');
// exports.funtionName = (reqest, response) => { Login goes here}

exports.createEmployer = (req, res) => {
    // TODO
    var response = req.response
    var industry = response.industry
    var companyName = response.companyName //array of answer strings
    var postings = response.postings
    var email = response.email
    var password = response.password
    var salt = response.salt

    var newEmployer = new Employer({
        industry: industry,
        name: name,
        postings: postings,
        email: email,
        password: password,
        salt: salt
    })

    newEmployer.save(function (err, question) {
        if (err)
            res.send(err);
        else   
            res.ok();
    }) 

    console.log(`${(new Date()).toLocaleString()}|A request for ${req.originalUrl}`)
    res.status(200).send('Not implemented yet');
}

exports.getEmployer = (req, res) => {
    // TODO
    console.log(`${(new Date()).toLocaleString()}|A request for ${req.originalUrl}`)
    res.status(200).send('Not implemented yet');
}
