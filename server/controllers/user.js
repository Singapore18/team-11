// Import mongoose to query MongoDB data
var mongoose = require('mongoose'),
// A Model, e.g. a table inside db
    Something = mongoose.model('Something');
// exports.funtionName = (reqest, response) => { Login goes here}

exports.createUser = (req, res) => {
    // TODO
    console.log(`${(new Date()).toLocaleString()}|A request for ${req.originalUrl}`)
    res.status(200).send('Not implemented yet');
}

exports.getUser = (req, res) => {
    // TODO
    console.log(`${(new Date()).toLocaleString()}|A request for ${req.originalUrl}`)
    res.status(200).send('Not implemented yet');
}
