import React from 'react';
import './Header.css';

import NavBar from '../NavBar/NavBar';
import MenuNoUser from '../MenuTop/MenuNoUser';
import MenuUser from '../MenuTop/MenuUser';

const Header = (props) => {
    return (
        <div className='Header'>
            <NavBar user={props.user} handleLogout={props.handleLogout} />
            00000001++
            {props.user ? <MenuUser user={props.user} /> : <MenuNoUser />}
        </div>
    )

}

export default Header;