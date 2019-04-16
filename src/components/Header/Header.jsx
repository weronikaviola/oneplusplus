import React from 'react';
import './Header.css';

import NavBar from '../NavBar/NavBar';
import MenuNoUser from '../MenuTop/MenuNoUser';
import MenuUser from '../MenuTop/MenuUser';

const Header = (props) => {
    return (
        <div className='Header'>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
                notifications={props.notifications}
                newInvite={props.newInvite}
            />
            00000001++
            {props.user ? <MenuUser user={props.user} newChat={props.newChat} /> : <MenuNoUser />}
        </div>
    )

}

export default Header;