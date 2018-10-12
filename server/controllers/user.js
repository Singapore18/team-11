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
            var new_user = new Staff({
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
    // TODO
    console.log(`${(new Date()).toLocaleString()}|A request for ${req.originalUrl}`)
    res.status(200).send('Not implemented yet');
}
