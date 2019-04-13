import React from 'react';

import socket from '../../socket';

class Chatroom extends React.Component {
    constructor() {
        super();
        this.state = {
            message: ''
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }

    sendMessage = (evt) => {
        socket.newMessage(this.state.message);
    }
    render() {
        return (
            <div>
                <input value={this.state.message} onChange={this.handleChange} name='message' />
                <button onClick={this.sendMessage}>submit</button>
            </div>
        )
    }
}

export default Chatroom;