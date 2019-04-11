import React from 'react';

class MyConnections extends React.Component {
    constructor(props) {
        super(props);
        this.user = props.user;
        this.state = { connections: [] }
    }

    getConnections = async () => {
        let url = `/api/profiles/${this.user}/all`;
        let connections = await fetch(url).then(res => res.json());
        return connections;
    }

    componentDidMount() {
        let connections = this.getConnections();
        console.log(connections);
    }

    render() {
        return (
            <div>
                {this.props.user}<br />
                MyConnections page
            </div >
        );
    };
}



export default MyConnections;