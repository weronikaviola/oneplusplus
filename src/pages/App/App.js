import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import userService from '../../utils/userService';

import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';

//react-router-dom comes with 'Link' and 'NavLink' components to use in place of <a> tag. Remember
//and delete this comment later :D

class App extends Component {
  constructor() {
    super();
    this.state = { ...this.getInitialState() }
  }

  getInitialState() {
    return {
      test: 'test state value',
      user: null
    };
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }


  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  /*---- lifecycle methods ----*/
  async componentDidMount() {
    const user = userService.getUser();
    console.log(user);
    this.setState(
      { user: user }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="jumbotron">
          <h3>1++</h3>
        </header>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route exact path='/' render={() =>
            <MainPage
              user={this.state.user}
            />
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
