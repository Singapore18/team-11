// Import mongoose to query MongoDB data
var mongoose = require('mongoose'),
// A Model, e.g. a table inside db
    Question = mongoose.model('Question');
// exports.funtionName = (reqest, response) => { Login goes here}

exports.parseResponse = (req, res) => {
    // TODO
    var response = req.response
    var questionNum = response.questionNum
    var answers = response.answers //array of answer strings

    var newResponses = new Question({
        question: questionNum,
        answers: answers
    })

    newResponses.save(function (err, question) {
        if (err)
            res.send(err);
        else   
            res.json({
                question: questionNum,
                answers: answers 
            });
    }) 

    console.log(`${(new Date()).toLocaleString()}|A request for ${req.originalUrl}`)
    res.status(200).send('Not implemented yet');
}

exports.getUser = (req, res) => {
    // TODO
    console.log(`${(new Date()).toLocaleString()}|A request for ${req.originalUrl}`)
    res.status(200).send('Not implemented yet');
}
