import tokenService from './utils/tokenService';

const socket = window.io();
let App = null;
let Chatroom = null;

function registerApp(app) {
    App = app;
}

function registerChatroom(obj) {
    Chatroom = obj;
}

socket.on('new-message', function (message) {
    App.setState(state => {
        const AllMessages = [...state.messages, message];
        App.announceNewChatMsg();
        return ({
            messages: AllMessages,
        });
    });
});

socket.on('invite-notification', function () {
    console.log('new invite notification');
    App.displayNewInvite();
});

function joinChat() {
    socket.emit('join-chat', tokenService.getToken());
}

function leaveChat() {
    socket.emit('leave-chat', tokenService.getToken());
}

function newMessage(msg) {
    socket.emit('new-message', msg);
}

function emitInviteNotification(userId) {
    console.log('emiting invite notifiction');
    socket.emit('invite-notification', userId);
}

export default {
    registerApp,
    joinChat,
    leaveChat,
    newMessage,
    registerChatroom,
    emitInviteNotification,
}


/////
