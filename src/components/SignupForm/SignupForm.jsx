import React from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class SignupForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    passwordMatch: null,
  };

  handleChange = (e) => {
    // this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  verifyPass = (e) => {
    // e.target.style.border = '1px solid red';
    this.setState({
      passwordMatch: (this.state.password === this.state.passwordConf)
    });
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        passwordConf: this.state.passwordConf,
      });
      this.props.handleSignupOrLogin();
      this.props.history.push('/profile');
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  }
  //////////////////////////////////////////
  render() {
    return (
      <div>
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="username" value={this.state.name} name="name" autoComplete="username" onChange={this.handleChange} autoFocus='true' />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" autoComplete="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" autoComplete="new-password" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" autoComplete="new-password" onChange={async (e) => {
                await this.handleChange(e);
                this.verifyPass(e);
              }} style={(this.state.passwordMatch === true) ? { border: '1px solid green' } : this.state.passwordMatch === false ? { border: '1px solid red' } : {}} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
};

export default SignupForm;