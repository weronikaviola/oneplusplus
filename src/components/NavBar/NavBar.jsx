import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className='NavBar'>
      <div>
        <span className='NavBar-welcome'>01101000 01101001, {props.user.name}</span>
        <Link to='/notifications' >
          <div className='NavBar-notifications'
            style={{
              backgroundColor: 'red',
              color: 'white',
            }}
          >
            <div></div>
            <div>{props.notifications}</div>
            <div className='NavBar-notification-circle'
              style={{
                visibility: `${props.nevInvite ? 'visible' : 'hidden'}`
              }}
            ></div>
          </div></Link>
      </div>
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>01101111 01110101 01110100</Link>
    </div >
    :
    <div className='NavBar'>
      <div></div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
    </div>
  return (
    <div className='NavBar'>
      {nav}
    </div>
  )
};

export default NavBar;

