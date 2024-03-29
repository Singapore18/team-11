// Import mongoose to query MongoDB data
var mongoose = require('mongoose'),
    // A Model, e.g. a table inside db
    Resume = mongoose.model('Resume'),
    User = mongoose.model('User');
// exports.funtionName = (reqest, response) => { Login goes here}

exports.getResume = (req, res) => {
    // TODO
    let resume = new Resume();
    let id = req.params.id;
    User.findById(id, (err, user) => {
        resume.personal_info = user.personalInfo;
        user.answers.forEach(e => {
            switch (e.question) {
                case 1:
                    resume.personal_interest = e.answers[0]
                    break;
                case 2:
                    resume.work_strength = e.answers[0]
                    break;
                case 3:
                    resume.work_experience = e.answers[0]
                    break;
                case 4:
                    resume.work_skills = e.answers[0]
                    break;
                case 5:
                    resume.job_interests = e.answers[0]
                    break;
                case 6:
                    resume.how_to_support = e.answers[0]
                    break;
                case 7:
                    resume.job_requests = e.answers[0]
                    break;
                case 8:
                    resume.interested_industries = e.answers

            }
        });

    })

    resume.save(function (err, question) {
        if (err)
            res.send(err);
        else
            res.json(resume);
    })

}

exports.getResumePdf = (req, res) => {
    // TODO
}