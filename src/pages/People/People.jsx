import React from 'react';

import { Route, Link } from 'react-router-dom';

import FindPeople from './components/FindPeople/FindPeople';
import tokenService from '../../utils/tokenService';

import UserProfile from '../ProfilePage/UserProfile';

import './People.css';

class People extends React.Component {
    constructor(props) {
        super();
        this.state = {
            myConnections: [],
            pending: [],
            doneFetching: false,
        }
    }

    getConnections = async () => {
        return await fetch('/api/profiles/all', {
            headers: {
                'Authorization': 'Bearer ' + tokenService.getToken()
            }
        }).then(res => res.json());
    }

    updateState = async () => {
        let response = await this.getConnections();
        this.setState({
            myConnections: response.connections,
            pending: response.pending,
            doneFetching: true,
        });

    }

    sendMessage() {
        alert('sending message');
    }

    componentDidMount = () => {
        this.updateState();
    }

    render() {
        return (
            <div className='People contentSite' >

                <div className='MyConnections'
                    style={{
                        padding: 10
                    }}>
                    01100011 01101111 01101110 01101110 01100101 01100011 01110100 01101001 01101111 01101110 01110011
                    {this.state.myConnections.map(connection => (
                        <div
                            key={connection._id}
                            style={{
                                border: '1px solid gray',
                                borderRadius: '10px',
                                padding: 5
                            }}
                        >
                            <p>{connection.name}</p>
                            <Link
                                className='btn btn-default btn-sm btn-primary white-text'
                                to={`/profile/${connection._id}`}>01101101 01101111 01110010 01100101</Link>
                            <button onClick={this.sendMessage}
                                className='btn btn-default btn-sm btn-danger white-text'
                            >01100011 01101000 01100001 01110100 </button>
                        </div>
                    ))}
                </ div >
                {this.state.doneFetching &&
                    <FindPeople
                        updateUserState={this.props.updateUserState}
                        addToConnections={this.addToConnections}
                        myConnections={this.state.myConnections}
                        pendingInvites={this.state.pending}
                        thisUserId={this.props.thisUserId} />}
            </div>
        );
    }

}

export default People;