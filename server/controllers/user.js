// Import mongoose to query MongoDB data
var mongoose = require('mongoose'),
    // A Model, e.g. a table inside db
    User = mongoose.model('User');
// exports.funtionName = (reqest, response) => { Login goes here}

exports.createUser = (req, res) => {
    let body = req.body;
    var info = body.personalInfo;
    let user = new User({
        _id: body.resumeId,
        personalInfo: {
            fullName: info.fullName,
            preferredName: info.preferredName,
            contactNumber: info.contact
        }
    })

    var record = [];

    body.answers.forEach((item) => {
        var num = item.question;
        if (num == 8) {
            var answers = {
                question: num,
                answers: item.answers,
            }
            record.push(answers);
        } else {
            var answers = {
                question: num,
                answers: [item.answers],
            }
            record.push(answers);
        }
    })
    user.answers = record;
    user.save((err, done) => {
        if (done) {
            res.json({ id: done._id })
        } else {
            res.status(400).send({ error: "DB failure" })
        }
    })
}

exports.getUser = (req, res) => {
    User.findOne(req.params.id, (err, user) => {
        if (err || !user) {
            res.status(404).send({ error: "No such user" });
        } else {
            res.json(user);
        }
    })
}

exports.getAllUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (!users)
            users = [];

        res.json({ users: users })
    })
}

/*
exports.updateUser = (req, res) => {
    let oldUser = req.body.user;
    let update = {
        email: oldUser.email,
        contact: oldUser.contact,
        firstName: oldUser.firstName,
        lastName: lastName.lastName
    }

    User.findOneAndUpdate(oldUser.id, update, (err, user) => {
        if (err || !user) {
            res.status(404).send({ error: "No such user" });
        } else {
            user = userFilter(user);
            res.json(user);
        }
    })
}
*/
