const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CATEGORIES = ['newMessage', 'connectionInvite', 'siteUpdates'];

const notificationSchema = new Schema({
    category: {
        type: String,
        enum: CATEGORIES,
    },
    fromUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FromUser'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        expires: '2m',
        default: Date.now,
    }
});


module.exports = mongoose.model('Notification', notificationSchema);