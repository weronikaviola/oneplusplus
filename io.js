const jwt = require('jsonwebtoken');
const User = require('./models/user');
let io;

const users = {

}

module.exports = {
    init,
    getIo
}

function init(http) {
    io = require('socket.io')(http);

    io.on('connection', (socket) => {
        socket.on('join-chat', async function (token) {
            const user = await validateToken(token);
            if (!user) return;
            users[users._id] = socket;
        });

        socket.on('leave-chat', async function (token) {
            const user = await validateToken(token);
            if (!user) return;
            delete users[user._id];
        });

        socket.on('new-message', function (message) {
            socket.emit('new-message', message);
        })
    })
}

function getIo() {
    return io;
}


//////

function validateToken(token) {
    return new Promise(function (resolve) {
        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) resolve(false);
            resolve(decoded.user);
        });
    });
}