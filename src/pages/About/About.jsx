import React from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {
    return (
        <div className='contentSite'>
            <Link className='BackBtn' to='/'>back</Link>
            This page uses binary representation of 8-bit ASCII Character Codes.
        </div>
    )
};

export default About;