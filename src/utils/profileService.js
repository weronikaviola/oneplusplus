import tokenService from './tokenService';

import socket from '../socket';

async function addToConnections(userId) {
    await fetch('/api/profiles/add', {
        method: 'POST',
        body: JSON.stringify({ invitee: userId }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json())
        .then(res => {
            if (res.token) {
                tokenService.setToken(res.token);
            }
            socket.emitInviteNotification(userId);
        }).catch(err => {
            console.log(err);
        })
}

async function findUsers() {
    let url = 'api/profiles/users'
    let response = await fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json())
        .catch(err => console.log(err));
    if (response.users) {
        return response.users;
    } else {
        return {
            err: 'an error occurred. try again later'
        }
    }
}

export default {
    findUsers,
    addToConnections,
}