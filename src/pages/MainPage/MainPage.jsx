import React from 'react';

const MainPage = (props) => {
  return (
    <div className='MainPage'>
      <h1>this is the main page</h1>
      <h3>this is the state of the main app</h3>
      <p>user: {props.user ? props.user.name : 'no user'}</p>
    </div>
  )
};

export default MainPage;