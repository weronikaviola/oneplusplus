//notification service

import tokenService from './tokenService';

async function getNotifications() {
    return await fetch('/api/notifications/all', {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
}

function decline(notId) {
    return fetch('/api/notifications/decline', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            notification: notId,
        })
    }).then(res => res.json())
        .catch(err => console.log(err));
}

async function acceptInvite(id, notId) {
    let result = await fetch('/api/notifications/accept', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fromUser: id,
            notification: notId,
        })
    }).then(res => res.json())
        .catch(err => console.log(err));
    return result;
}

export default {
    getNotifications,
    acceptInvite,
    decline,
}