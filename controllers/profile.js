const User = require('../models/user');
const Profile = require('../models/userProfile');


module.exports = {
    myProfile,
    create
}

function create(req, res) {
    let profile = req.body;
    profile.interests = profile.interests.split(',');
    let photo = req.body.photo;
    User.findOneAndUpdate({ '_id': req.params.id }, { new: true })
        .then(user => {
            user.profile = profile;
            user.profile.photo = photo;
            return user.save()
        })
        .then(user =>
            res.json(user))
        .catch(err => console.log(err));
}

function myProfile(req, res) {
    console.log(req.params.id);
    User.findById(req.params.id)
        .then(user => {
            res.json(user)
        });
}
