import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className='NavBar'>
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
    </div>
    :
    <div className='NavBar'>
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
    </div>
  return (
    <div className='NavBar'>
      {nav}
    </div>
  )
};

export default NavBar;

