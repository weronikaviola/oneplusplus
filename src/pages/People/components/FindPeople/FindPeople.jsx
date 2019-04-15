import React from 'react';

import './FindPeople.css';

import profileService from '../../../../utils/profileService';
import userService from '../../../../utils/userService';
// import tokenService from '../../../../utils/tokenService';

import UserBox from '../../../../components/UserBox/UserBox';

class FindPeople extends React.Component {
    constructor() {
        super();
        this.state = { users: [] }
    }

    hideInvitedUser = (id) => {
        let element = this.refs.id;
        console.log(element);
    }

    async findUsers() {
        let users = await profileService.findUsers();
        // let url = 'api/profiles/users'
        // let response = await fetch(url, {
        //     headers: {
        //         'Authorization': 'Bearer ' + tokenService.getToken()
        //     }
        // })
        //     .then(res => res.json())
        // .catch(err => console.log(err));
        if (users.err) console.log(users);
        else {
            this.setState({
                users
            });
        }
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

    //////
    componentDidMount = () => {
        this.findUsers();
    }
    render() {
        return (
            <div className='FindPeople'>
                FindPeople page
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