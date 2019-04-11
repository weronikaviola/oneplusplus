import React from 'react';
import { Link } from 'react-router-dom';


import FileUpload from '../../components/FileUpload/FileUpload';

const Creators = (props) => {
    return (
        <div>
            <Link to='/'>back</Link>
            <FileUpload />
        </div>
    );
};

export default Creators;