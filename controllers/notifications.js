const Notification = require('../models/notification');
const User = require('../models/user');

module.exports = {
    getAll,
    accept,
    decline,
}


function decline(req, res) {
    Notification.findByIdAndUpdate(req.body.notification, { seen: true }).catch(err => console.log(err));
    res.json({
        ok: 'ok'
    });
}

async function accept(req, res) {
    User.findByIdAndUpdate(req.body.fromUser, { $push: { connections: req.user._id } })
        .catch(err => console.log(err.message));
    User.findByIdAndUpdate(req.user._id, { $push: { connections: req.body.fromUser } })
        .catch(err => console.log(err));
    Notification.findByIdAndUpdate(req.body.notification, { seen: true }).catch(err => console.log(err));
    res.json({
        test: 'ok'
    });
}

function getAll(req, res) {
    Notification.find({ 'userId': req.user._id })
        .then(notifications => {
            res.json({ notifications })
        })
        .catch(err => {
            res.json({
                err: 'db connection lost, try again',
            });
        });
}