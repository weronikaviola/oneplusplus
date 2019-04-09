import React from 'react';

const Timer = (props) => {
    return (
        <div className={props.time > 10 ? "TestPage-timer-ok" : "TestPage-timeout"}>{props.time > 9 ? `00:${props.time}` : `00:0${props.time}`}</div>
    );
};

export default Timer;