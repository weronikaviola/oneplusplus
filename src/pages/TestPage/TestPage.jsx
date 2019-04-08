import React from 'react';
import { Link } from 'react-router-dom';

class TestPage extends React.Component {
    render() {
        return (
            <div>
                <Link to='/'>back</Link>
                test page
            </div>
        );
    }
};

export default TestPage;