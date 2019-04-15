import React from 'react';
import { Link } from 'react-router-dom';

import './LoginPage.css';

import userService from '../../utils/userService';

class LoginPage extends React.Component {
	state = {
		email: '',
		pw: '',
		message: ' '
	};

	handleChange = (e) => {
		this.setState({
			message: ''
		});
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	displayErrorMessage = () => {
		this.setState({
			message: 'Invalid credentials'
		});
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let response = await userService.login({ email: this.state.email, pw: this.state.pw });
			if (response.err) {
				this.setState({
					message: response.err,
				});
			}
			else {
				this.props.handleSignupOrLogin();
				this.props.history.push('/notifications');
			}

		} catch (err) {
			this.displayErrorMessage();
		}
	}

	render() {
		return (
			<div className="LoginPage">
				<header className="header-footer">Log In</header>
				<form className="form-horizontal" onSubmit={this.handleSubmit} >
					<div className="form-group">
						<div className="col-sm-12">
							<input type="email" className="form-control" placeholder="Email" autoComplete='email' value={this.state.email} name="email" onChange={this.handleChange} />
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-12">
							<input type="password" className="form-control" placeholder="Password" autoComplete='current-password' value={this.state.pw} name="pw" onChange={this.handleChange} />
						</div>
					</div>
					<div className='form-group red-text'>
						{this.state.message}
					</div>

					<div className="form-group">
						<div className="col-sm-12 text-center">
							<button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
						</div>
					</div>
				</form>
			</div>
		);
	}
};

export default LoginPage;