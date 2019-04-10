const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.SECRET;

module.exports = function (req, res, next) {
    let token = req.get('Authorization') || req.query.token || req.body.token;
    if (token) {
        console.log(token);
        token = token.replace('Bearer', '');
        jwt.verify(token, JWT_SECRET, function (err, decoded) {
            if (err) {
                next(err)
            } else {
                req.user = decoded.user;
                next();
            }
        });
    } else {
        next();
    }
};