import tokenService from './tokenService';
import { Server } from 'https';

//constants
const BASE_URL = '/api/users/';


//functions
function signup(user) {
	console.log('in signup');
	return fetch(BASE_URL + 'signup', {
		method: 'POST',
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: JSON.stringify(user)
	})
		.then(res => {
			console.log('ok, got res');
			if (res.ok) return res.json();
			throw new Error('Email already taken');
		})
		.then(({ token }) => {
			tokenService.setToken(token)
		});
}

function getUser() {
	return tokenService.getUserFromToken();
}

function logout() {
	tokenService.removeToken();
}

async function login(creds) {

	let response = await fetch(BASE_URL + 'login', {
		method: 'POST',
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: JSON.stringify(creds)
	}).then(res => res.json())
		.catch(err => console.log(err));

	if (response.err) {
		return response;
	}
	else {
		console.log(response);
		await tokenService.setToken(response.token);
		return { status: 'ok' }
	}
	// .then(({ token }) => tokenService.setToken(token))
	// .catch(err => console.log(err));
}


export default {
	getUser,
	signup,
	logout,
	login,
}