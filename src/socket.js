import tokenService from './utils/tokenService';

const socket = window.io();
let App = null;

function registerApp(app) {
    App = app;
}


socket.on('new-message', function (message) {
    console.log('received the message');
    App.setState({ test: message })
})

function joinChat() {
    socket.emit('join-chat', tokenService.getToken());
}

function leaveChat() {
    socket.emit('leave-chat', tokenService.getToken());
}

function newMessage(msg) {
    console.log('sending message from the socket');
    socket.emit('new-message', { message: msg });
    console.log('sent');
}

export default {
    registerApp,
    joinChat,
    leaveChat,
    newMessage
}