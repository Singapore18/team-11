// Import mongoose to query MongoDB data
var mongoose = require('mongoose'),
// A Model, e.g. a table inside db
    Employer = mongoose.model('Employer');
// exports.funtionName = (reqest, response) => { Login goes here}

exports.createEmployer = (req, res) => {
    // TODO

    let employer = req.employer;
    let industry = employer.industry;
    let name = employer.name;
    let email = employer.email;


    var newEmployer = new Employer({
        industry: industry,
        name: name,
        email: email
    })

    newEmployer.save(function (err, question) {
        if (err)
            res.send(err);
        else   
            res.json({ name: name });
    }) 

}

exports.getEmployer = (req, res) => {
    // TODO
    Employer.findOne(req.params.id, (err, employer) => {
        if (err || !employer) {
            res.status(404).send({ error: "No such employer" });
        } else {
            res.json(employer);
        }
    })

    console.log(`${(new Date()).toLocaleString()}|A request for ${req.originalUrl}`)
    res.status(200).send('Not implemented yet');
}