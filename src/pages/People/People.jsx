import React from 'react';

import FindPeople from './components/FindPeople/FindPeople';
import tokenService from '../../utils/tokenService';

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
                    MyConnections page
                    {this.state.myConnections.map(connection => (
                        <div key={connection._id}>{connection.name}</div>
                    ))}
                </ div >
                <FindPeople updateUserState={this.props.updateUserState} />
            </div>
        );
    }

}

export default People;