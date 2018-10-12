// Import mongoose to query MongoDB data
var mongoose = require('mongoose'),
// A Model, e.g. a table inside db
    JobPosting = mongoose.model('JobPosting');
// exports.funtionName = (reqest, response) => { Login goes here}

exports.showPosting = (req, res) => {
    // TODO
    var response = req.response
    var industry = response.industry
    var companyName = response.companyName //array of answer strings
    var postingName = response.postingName
    var description = response.description

    var newJobPosting = new JobPosting({
        industry: industry,
        companyName: companyName,
        postingName: postingName,
        description: description
    })

    newJobPosting.save(function (err, question) {
        if (err)
            res.send(err);
        else   
            res.ok();
    }) 

    console.log(`${(new Date()).toLocaleString()}|A request for ${req.originalUrl}`)
    res.status(200).send('Not implemented yet');
}

exports.getJobPosting = (req, res) => {
    // TODO
    console.log(`${(new Date()).toLocaleString()}|A request for ${req.originalUrl}`)
    res.status(200).send('Not implemented yet');
}
