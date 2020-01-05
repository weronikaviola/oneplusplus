import React from 'react';
import { Link } from 'react-router-dom';
import {
    DESCRIPTION,
    QUOTE,
} from './Constants';

const About = (props) => {
    return (
        <div className='contentSite'>
            <Link className='BackBtn' to='/'>back</Link>
            <div className='paddedContent'>
                {DESCRIPTION}
            </div>
            <div>
                {QUOTE}
            </div>
        </div>
    )
};

export default About;