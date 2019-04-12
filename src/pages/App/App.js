import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import userService from '../../utils/userService';

import Header from '../../components/Header/Header';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';
import About from '../About/About';
import TestPage from '../TestPage/TestPage';
import Creators from '../Creators/Creators';
import MyProfilePage from '../ProfilePage/MyProfilePage';
import People from '../People/People';

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

  updateUserState = () => {
    const user = userService.getUser();
    this.setState({
      user: user
    });
  }
  /*---- lifecycle methods ----*/
  async componentDidMount() {
    this.updateUserState();
  }

  unmountApp() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  }
  render() {
    return (
      <div className="App">
        <Header user={this.state.user} handleLogout={this.handleLogout} />
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
          <Route exact path='/about' render={() =>
            <About />
          } />
          <Route exact path='/test' render={({ history }) =>
            <TestPage
              history={history}
              unmountApp={this.unmountApp}
            />
          } />
          <Route exact path='/creators' render={() =>
            <Creators />
          } />
          {this.state.user &&
            <>
              <Route exact path='/profile' render={() =>
                <MyProfilePage
                  user={this.state.user}
                  updateUserState={this.updateUserState}
                />
              } />
              <Route exact path='/people' render={() => (
                <People user={this.state.user._id} />
              )} />
            </>}
        </Switch>
      </div >
    );
  }
}

export default App;
