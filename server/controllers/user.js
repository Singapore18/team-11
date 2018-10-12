// Import mongoose to query MongoDB data
var mongoose = require('mongoose'),
    // A Model, e.g. a table inside db
    User = mongoose.model('User');
// exports.funtionName = (reqest, response) => { Login goes here}

exports.createUser = (req, res) => {
    let user = req.user;
    let username = user.username;
    let password = user.password;

    User.findOne(username, (err, user) => {
        if (user) {
            res.status(400).send({ error: "Username already exists" });
        } else {
            const salt = bcrypt.genSaltSync();
            password = bcrypt.hashSync(password + salt, 10)
            var new_user = new User({
                _id: username,
                password: password,
                salt: salt,
            })
            new_user.save(function (err, user) {
                if (err)
                    res.send(err);
                else
                    res.json({ username: username });
            })
        }
    })

}

exports.getUser = (req, res) => {
    User.findOne(req.params.id, (err, user) => {
        if (err || !user) {
            res.status(404).send({ error: "No such user" });
        } else {
            user = userFilter(user);
            res.json(user);
        }
    })
}

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

// To remove sensitive data
function userFilter(user) {
    user.salt = null;
    user.password = null;
    return user;
}
