import React from 'react';
import tokenService from '../../../../utils/tokenService';

class MyConnections extends React.Component {
    constructor() {
        super();
        this.state = {
            connections: []
        }
    }

    getConnections = async () => {
        return await fetch('/api/profiles/all', {
            headers: {
                'Authorization': 'Bearer ' + tokenService.getToken()
            }
        }).then(res => res.json());
    }

    componentDidMount = async () => {
        let response = await this.getConnections();
        this.setState({
            connections: response.connections
        });
    }

    render() {
        return (
            <div>
                MyConnections page
                {this.state.connections.map(connection => (
                    <div key={connection._id}>{connection.name}</div>
                ))}
            </ div >
        );
    };
}



export default MyConnections;