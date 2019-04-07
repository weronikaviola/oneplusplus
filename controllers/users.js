const User = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

module.exports = {
	login,
	signup,
}

async function login(req, res) {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) return res.status(401).json({ err: 'bad credentials' });
		user.comparePassword(req.body.pw, (err, isMatch) => {
			if (isMatch) {
				const token = createJWT(user);
				res.json({ token });
			} else {
				return res.status(401).json({ err: 'invalid password' });
			}
		});
	} catch (err) {
		return res.status(410).json(err);
	}
}

async function signup(req, res) {
	let newUser = new User(req.body);
	try {
		await newUser.save();
		const token = createJWT(newUser);
		res.json({ token });
	} catch (err) {
		res.status(400).json(err);
	}
}

///
function createJWT(user) {
	return jwt.sign(
		{ user },
		SECRET,
		{ expiresIn: '24h' }
	);
}