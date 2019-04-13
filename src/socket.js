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
    console.log('received the message');
    Chatroom.setState(state => {
        const AllMessages = [...state.messages, message];
        console.log(AllMessages);
        return ({
            messages: AllMessages,
        });
    })
})

function joinChat() {
    socket.emit('join-chat', tokenService.getToken());
}

function leaveChat() {
    socket.emit('leave-chat', tokenService.getToken());
}

function newMessage(msg) {
    socket.emit('new-message', msg);
    console.log('sent');
}

export default {
    registerApp,
    joinChat,
    leaveChat,
    newMessage,
    registerChatroom,
}