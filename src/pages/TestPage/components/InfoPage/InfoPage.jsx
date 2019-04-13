import React from 'react';

import '../Tests.css';

const InfoPage = (props) => {
    return (
        <div className='TestPage-test'>
            <h3>Do you think you have what it takes to join the 1++ community? <br>
            </br>
                You have 30 seconds... ready?
            </h3>
            <button className='btn btn-default' onClick={props.toFirstStep}>GO</button>
        </div>
    )
}


export default InfoPage;