import React from 'react';

import MyConnections from './components/MyConnections/MyConnections';
import FindPeople from './components/FindPeople/FindPeople';

const People = (props) => {
    return (
        <div className='People'>

            <MyConnections />
            <FindPeople />
        </div>
    );
}

export default People;