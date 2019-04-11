import React from 'react';
import { Link } from 'react-router-dom';

import './MenuTop.css';


const MenuUser = (props) => {
    return (
        <div className='MenuTop'>
            <Link to='/profile' className='MenuTop-link'>MY PROFILE</Link>
            <Link to='/people' className='MenuTop-link'>PEOPLE</Link>
            <Link to='' className='MenuTop-link'>LINK 3</Link>
        </div >
    )
}

export default MenuUser;