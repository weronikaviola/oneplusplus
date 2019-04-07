import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';

import './SignupPage.css';


class SignupPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { message: '' }
	}

	updateMessage = (msg) => {
		this.setState({ message: msg });
	}

	render() {
		return (
			<div className='SignupPage'>
				<SignupForm
					{...this.props}
					updateMessage={this.updateMessage}
					handleSignup={this.props.handleSignup}
				/>
				<p>{this.state.message}</p>
			</div>
		);
	}
};

export default SignupPage;