const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CATEGORIES = ['newMessage', 'connectionInvite', 'siteUpdates'];

const notificationSchema = new Schema({
    category: {
        type: String,
        enum: CATEGORIES,
    },
    fromUser: {
        type: String,
    },
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FromUser'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        expires: 60 * 60 * 24,
        default: Date.now,
    },
    seen: {
        type: Boolean,
        default: false,
    }
});


module.exports = mongoose.model('Notification', notificationSchema);