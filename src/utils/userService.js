import tokenService from './tokenService';

//constants
const BASE_URL = '/api/users/';


//functions
function signup(user) {
	return fetch(BASE_URL + 'signup', {
		method: 'POST',
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: JSON.stringify(user)
	})
		.then(res => {
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

function login(creds) {
	console.log('creds:', creds);
	return fetch(BASE_URL + 'login', {
		method: 'POST',
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: JSON.stringify(creds)
	})
		.then(res => {
			if (res.ok) return res.json();
			throw new Error('Invalid Credentials');
		})
		.then(({ token }) => tokenService.setToken(token));
}




export default {
	getUser,
	signup,
	getUser,
	logout,
	login,
}