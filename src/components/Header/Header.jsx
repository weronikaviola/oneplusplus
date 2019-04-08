import React from 'react';
import './Header.css';

import NavBar from '../NavBar/NavBar';
import MenuNoUser from '../MenuTop/MenuNoUser';

const Header = (props) => {
    return (
        <div className='Header'>
            <NavBar user={props.user} handleLogout={props.handleLogout} />
            1++
            {props.user ? 'nothing yet' : <MenuNoUser />}
        </div>
    )

}

export default Header;