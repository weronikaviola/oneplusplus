import React from 'react';

import socket from '../../socket';
import './Chatroom.css';

class Chatroom extends React.Component {
    constructor() {
        super();
        this.state = {
            message: '',
            messages: [{ author: 'weronika', text: 'testing messages' }, { author: 'weronika', text: 'testing messages' }]
        }
    }

    accumulator = 0;

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }

    sendMessage = (evt) => {
        socket.newMessage({
            author: this.props.user.name,
            text: this.state.message
        });
        this.setState({
            message: ''
        })
    }
    /////
    componentDidMount() {
        socket.registerChatroom(this);
    }
    render() {
        return (
            <div className='Chatroom'>
                <div className='Chatroom-messages'>
                    {this.state.messages.map(msg => {
                        this.accumulator += 1;
                        return (
                            <div className='Chatroom-oneMsg' key={this.accumulator}>
                                <h4>{msg.author}</h4>
                                {msg.text}
                            </div>
                        )
                    })}
                </div>
                <form
                    onSubmit={(evt) => { evt.preventDefault(); this.sendMessage(); }}
                    className='form-horizontal col-sm-6'
                    style={{ display: 'flex', margin: '10px' }}
                >
                    <input className='form-control' type='text' value={this.state.message} onChange={this.handleChange} name='message' autoFocus={true} />
                    <button className='btn btn-default'>submit</button>
                </form>
            </div>
        )
    }
}

export default Chatroom;