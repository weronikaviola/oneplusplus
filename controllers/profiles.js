const User = require('../models/user');
const Notification = require('../models/notification');

const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;


module.exports = {
    myProfile,
    create,
    getAllFriends,
    getUsers,
    addConnection,
    getUserInfo,
}


function getUserInfo(req, res) {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.json({
            err: 'server error'
        }));
}

async function addConnection(req, res) {
    if (req.user) {
        let updatedUser = await User.findByIdAndUpdate(req.user._id, { new: true })
            .then(user => {
                user.sentInvites.push(req.body.invitee);
                return user.save();
            });
        await User.findById(req.body.invitee)
            .then(user => {
                let notification = new Notification({
                    category: 'connectionInvite',
                    fromUser: req.user.name,
                    fromUserId: req.user._id,
                    userId: user._id
                });
                return notification.save();
            }).catch(err => {
                console.log(err);
            });
        let token = createJWT(updatedUser);
        res.json({ token });
    }
}


function getAllFriends(req, res) {
    if (req.user) {
        User.findById(req.user._id)
            .populate('connections')
            .then(results => {
                return res.json({
                    connections: results.connections,
                    pending: results.sentInvites
                });
            }).catch(err =>
                console.log(err));
    }
}

function getUsers(req, res) {
    if (req.user) {
        User.find({ _id: { $nin: req.user.connections } })
            .then(results => {
                return res.json({ users: results })
            }).catch(err => {
                console.log(err);
            });
    }
}



function create(req, res) {
    if (req.user) {
        User.findByIdAndUpdate(req.user._id)
            .then(user => {
                if (!user.profile) user.profile = {};
                user.profile.interests = req.body.interests.split(',');
                user.profile.description = req.body.description;
                user.profile.photo = req.body.photo;
                return user.save()
            })
            .then(user => {
                let token = createJWT(user);
                res.json({ token })
            })
            .catch(err => res.json({ err: 'server error. please try again' }));
    }

}

function myProfile(req, res) {
    if (req.user) {
        User.findById(req.user._id)
            .then(user => {
                return res.json(user)
            })
            .catch(err => {
                return res.status(300).send(err);
            })
    }
}

/////////
function createJWT(user) {
    return jwt.sign(
        { user },
        SECRET,
        { expiresIn: '24h' }
    );
}
