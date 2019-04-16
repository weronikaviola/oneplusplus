const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;


const profileSchema = new Schema({
	description: {
		type: String,
		maxlength: 500
	},
	photo: {
		type: String,
		maxlength: 500
	},
	interests: [String],
});


// const notificationSchema = new Schema({
// 	category: String,
// 	fromUser: String,
// }, { timestamps: true });



const userSchema = new Schema({
	name: String,
	email: { type: String, required: true, lowercase: true },
	password: String,
	connections: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	profile: profileSchema,
	pendingInvitations: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	sentInvites: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });


userSchema.set('toJSON', {
	transform: function (doc, ret) {
		delete ret.password;
		return ret;
	}
});

userSchema.pre('save', function (next) {
	const user = this;
	if (!user.isModified('password')) return next();
	bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
		if (err) return next(err);
		user.password = hash;
		next();
	});
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
	bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model('User', userSchema);