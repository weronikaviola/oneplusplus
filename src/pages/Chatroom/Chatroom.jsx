import React from 'react';

import socket from '../../socket';
import './Chatroom.css';

class Chatroom extends React.Component {
    constructor(props) {
        super();
        this.state = {
            message: '',
            messages: []
        }
        this.accumulator = 0;
        this.messengerRef = React.createRef();
        this.inputRef = React.createRef();
        this.myColor = this.generateRandomColor();
    }


    handleChange = (evt) => {
        evt.persist();
        if (evt.nativeEvent.inputType === 'deleteContentBackward') {
            this.setState(state => {
                let newMsg = state.message.slice(0, state.message.length - 9);
                return ({
                    message: newMsg
                });
            });
        } else {
            this.setState(state => {
                let newMessage = state.message += this.charToBin(evt.nativeEvent.data);
                return ({
                    message: newMessage
                });
            });
        }
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

    ///
    charToBin(char) {
        char = this.charToUTF16(char);
        char = char.toString(2);
        return char.padStart(8, '0') + ' ';
    }
    charToUTF16(char) {
        return char.charCodeAt(0);
    }
    generateRandomColor() {
        let color = [];
        for (let i = 0; i < 3; i++) {
            let random = Math.floor(Math.random() * 236) + 20;
            color.push(random);
        }
        return `rgb(${color.join(',')})`;
    }
    /////
    componentDidMount = () => {
        socket.registerChatroom(this);
        this.inputRef.current.focus();
    }
    componentDidUpdate = () => {
        this.messengerRef.current.scrollTop = this.messengerRef.current.scrollHeight;
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div className='Chatroom'>
                <div className='Chatroom-messages'
                    ref={this.messengerRef}
                >
                    {this.state.messages.length > 0 ?
                        this.state.messages.map(msg => {
                            this.accumulator += 1;
                            return (
                                <div className='Chatroom-oneMsg' key={this.accumulator}>
                                    <div><span style={{
                                        color: this.myColor
                                    }}>{msg.author}</span>>>{msg.text}</div>
                                </div>
                            )
                        })
                        :
                        <div className='gray-text Chatroom-oneMsg'>{'01110011 01110100 01100001 01110010 01110100 00100000 01110100 01111001 01110000 01101001 01101110 01100111 '}</div>
                    }
                </div>
                <form className='Chatroom-form'
                    onSubmit={(evt) => { evt.preventDefault(); this.sendMessage(); }}
                >

                    <span className='Chatroom-blinking'>{'> '}</span>
                    <input
                        className='Chatroom-input'
                        type='text' value={this.state.message}
                        onChange={this.handleChange}
                        name='message'
                        ref={this.inputRef}
                        autoComplete='off'
                        focus
                    />
                    {/* <button className='btn btn-default'>submit</button> */}
                </form>
            </div>
        )
    }
}

export default Chatroom;