import React from 'react';

import './FindPeople.css';

import profileService from '../../../../utils/profileService';
import userService from '../../../../utils/userService';
// import tokenService from '../../../../utils/tokenService';

import UserBox from '../../../../components/UserBox/UserBox';

class FindPeople extends React.Component {
    constructor(props) {
        super();
        this.state = { users: [] }
    }

    hideInvitedUser = (id) => {
        let element = this.refs.id;
    }

    filterUsers = (users) => {
        let myConnectionsId = this.props.myConnections.map(user => (user._id));
        let doNotDisplay = [...myConnectionsId, ...this.props.pendingInvites, this.props.thisUserId];
        return users.filter(user => !(doNotDisplay.includes(user._id)));
    }

    async findUsers() {
        let users = await profileService.findUsers();
        //filter users
        let filtered = this.filterUsers(users);
        if (users.err) console.log(users);
        else {
            this.setState({
                users: filtered
            });
        }
    }

    //////
    componentDidMount = () => {
        this.findUsers();
    }
    render() {
        return (
            <div className='FindPeople'>
                01100110 01101001 01101110 01100100
                {this.state.users.map(user => (
                    <div className='FindPeople-userBox' key={user._id} ref={user._id}>
                        <UserBox user={user} />
                    </div>
                ))}
            </div>
        )
    };
}



export default FindPeople;