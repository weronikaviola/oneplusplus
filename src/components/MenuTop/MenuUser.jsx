import React from 'react';
import { Link } from 'react-router-dom';

import './MenuTop.css';


const MenuUser = (props) => {
    return (
        <div className='MenuTop'>
            <Link to='/profile' className='MenuTop-link'>MY PROFILE</Link>
            <Link to='/people' className='MenuTop-link'>PEOPLE</Link>
            <Link
                style={{
                    textDecoration: `${props.newChat ? 'underline' : 'none'}`
                }}
                to='/chatroom' className='MenuTop-link'>MEET</Link>
            <Link to='/messages' className='MenuTop-link'>MESSAGES</Link>
        </div >
    )
}

export default MenuUser;