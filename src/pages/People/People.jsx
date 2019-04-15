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
            myConnections: []
        }
    }

    getConnections = async () => {
        return await fetch('/api/profiles/all', {
            headers: {
                'Authorization': 'Bearer ' + tokenService.getToken()
            }
        }).then(res => res.json());
    }

    // async addToConnections(userId) {
    //     await fetch('/api/profiles/add', {
    //         method: 'POST',
    //         body: JSON.stringify({ userId }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + tokenService.getToken()
    //         }
    //     }).then(res => res.json())
    //         .then(res => {
    //             if (res.token) {
    //                 tokenService.setToken(res.token);
    //                 this.props.updateUserState();
    //                 this.findUsers();
    //             }
    //         }).catch(err => {
    //             console.log(err);
    //         })
    // }

    updateState = async () => {
        let response = await this.getConnections();
        this.setState({
            myConnections: response.connections
        });
    }

    componentDidMount = () => {
        this.updateState();
    }

    //figure out something here? when do I want to update the state? 
    // componentDidUpdate = async () => {
    //     this.updateState();
    // }
    render() {
        return (
            <div className='People contentSite' >

                <div className='MyConnections'>
                    MyConnections
                    {this.state.myConnections.map(connection => (
                        <div key={connection._id}>
                            <p>{connection.name}</p>
                            <Link to={`/profile/${connection._id}`}>detils</Link>
                        </div>
                    ))}
                </ div >
                <FindPeople
                    updateUserState={this.props.updateUserState}
                    addToConnections={this.addToConnections} />
            </div>
        );
    }

}

export default People;