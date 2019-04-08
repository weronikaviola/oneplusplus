import React from 'react';
import { Link } from 'react-router-dom';

import './MenuTop.css';


const MenuNoUser = (props) => {
	return (
		<div className='MenuTop'>
			<Link to='/about' className='MenuTop-link'>ABOUT</Link>
			<Link to='/test' className='MenuTop-link'>TAKE A TEST</Link>
			<Link to='/creators' className='MenuTop-link'>CREATORS</Link>
		</div>
	)
}

export default MenuNoUser;