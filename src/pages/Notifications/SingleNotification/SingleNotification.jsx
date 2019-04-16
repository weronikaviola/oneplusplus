import React from 'react';

import notificationService from '../../../utils/notificationService';

const COLORS = {
    'newMessage': 'blue',
    'connectionInvite': 'green',
}
const MESSAGES = {
    'newMessage': 'sent you a new message',
    'connectionInvite': 'invited you to connect',
}


const SingleNotification = (props) => {
    return (
        <div
            key={props.element._id}
            style={{
                border: `3px solid ${COLORS[props.element.category]}`,
                background: 'black',
                opacity: `${props.element.seen ? '0.3' : '1'}`,
                margin: '10px auto',
                width: '90%',
                padding: 8,
            }}
        >
            {`${props.element.fromUser} ${MESSAGES[props.element.category]}`}
            <br />
            {props.element.category === 'newMessage' ?
                <div className='btn btn-primary btn-sm'>read</div>
                :
                <>
                    <div
                        className='btn btn-success btn-sm'
                        onClick={() => {
                            notificationService.acceptInvite(props.element.fromUserId, props.element._id);
                            props.displayNoInvites();
                            props.update();
                            // this.forceUpdate();
                        }}
                        disabled={props.element.seen}
                    >
                        accept
                </div>
                    &nbsp; &nbsp;
                <div
                        className='btn btn-danger btn-sm'
                        disabled={props.element.seen}
                    >
                        decline
                </div>
                </>}

        </div>
    )
}
export default SingleNotification;