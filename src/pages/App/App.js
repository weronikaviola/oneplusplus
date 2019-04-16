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
import Chatroom from '../Chatroom/Chatroom';
import Notifications from '../Notifications/Notifications';
import UserProfile from '../ProfilePage/UserProfile';
import Messages from '../Messages/Messages';

import socket from '../../socket';
import notificationService from '../../utils/notificationService';

class App extends Component {
  constructor() {
    super();
    this.state = { ...this.getInitialState() }
  }

  getInitialState() {
    return {
      test: 'test state value',
      user: null,
      activeUsers: {},
      admissionPassed: false,
      notificationsNo: 0,
      notifications: [],
      ready: false,
      messages: [],
      newChat: false,
      newInvite: false,
    };
  }

  handleSignupOrLogin = () => {
    const user = userService.getUser();
    if (user) {
      socket.joinChat();
      this.setState({ user });
    }
  }

  handleAdmissionTest = (res) => {
    this.setState({
      admissionPassed: res
    });
  }

  handleLogout = () => {
    socket.leaveChat();
    userService.logout();
    this.setState({ user: null });
  }

  updateUserState = () => {
    const user = userService.getUser();
    this.setState({
      user: user
    });
  }

  updateNotifications = async () => {
    const notifications = await notificationService.getNotifications();
    const notSeen = notifications.notifications.filter(n => (n.seen === false));
    this.setState({
      notifications: notifications.notifications,
      notificationsNo: notSeen.length,
    });
  }

  displayNewInvite = () => {
    this.setState({ newInvite: true });
    this.updateNotifications();
  }

  displayNoInvites = () => {
    this.setState({ newInvite: false });
  }

  sendMessage = (msg) => {
    socket.newMessage(msg);
  }

  announceNewChatMsg = () => {
    this.setState({ newChat: true });
    setTimeout(() => {
      this.setState({ newChat: false });
    }, 1000);
  }
  /*---- lifecycle methods ----*/
  componentDidMount = async () => {
    socket.registerApp(this);
    const user = await userService.getUser();
    if (user) {
      await this.setState({
        user,
      });
      socket.joinChat();
      this.setState({
        ready: true
      });
      await this.updateNotifications();
    }
  }


  unmountApp() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  }
  render() {
    return (
      <div className="App">
        <Header
          user={this.state.user}
          handleLogout={this.handleLogout}
          notifications={this.state.notificationsNo}
          newChat={this.state.newChat}
          newInvite={this.state.newInvite}
        />
        <Switch>
          <Route exact path='/' render={() =>
            <MainPage
              user={this.state.user}
            />
          } />
          {this.state.admissionPassed &&
            <Route exact path='/signup' render={({ history }) =>
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />}
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              updateNotifications={this.updateNotifications}
            />
          } />
          <Route exact path='/about' render={() =>
            <About />
          } />
          <Route exact path='/test' render={({ history }) =>
            <TestPage
              history={history}
              unmountApp={this.unmountApp}
              handleAdmissionTest={this.handleAdmissionTest}
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
                <People
                  updateUserState={this.updateUserState}
                  thisUserId={this.state.user._id}
                />
              )} />
              <Route exact path='/chatroom' render={() => (
                < Chatroom user={this.state.user}
                  socketMessage={this.sendMessage}
                  messages={this.state.messages}
                />
              )} />
              <Route exact path='/notifications' render={() => (
                <Notifications
                  notifications={this.state.notifications}
                  update={this.updateNotifications}
                  displayNoInvites={this.displayNoInvites}
                />
              )} />
              <Route path='/profile/:id' render={(props) => (
                < UserProfile {...props} />
              )} />
              <Route path='/messages' render={(props) => (
                <Messages {...props} />
              )} />
            </>}
        </Switch>
      </div >
    );
  }
}

export default App;
