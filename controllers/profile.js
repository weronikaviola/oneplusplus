const User = require('../models/user');
const Profile = require('../models/userProfile');

module.exports = {
    myProfile,
}

function myProfile(req, res) {
    console.log('ok');
    console.log(req.headers);
    res.json({
        name: 'weronika',
        stuff: 'other stuff'
    });
}