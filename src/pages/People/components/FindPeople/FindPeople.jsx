import React from 'react';

import './FindPeople.css';

import tokenService from '../../../../utils/tokenService';

class FindPeople extends React.Component {
    constructor() {
        super();
        this.state = { users: [] }
    }

    async findTenUsers() {
        let url = 'api/profiles/users'
        let response = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + tokenService.getToken()
            }
        })
            .then(res => res.json())
            .catch(err => console.log(err));
        this.setState({
            users: response.users
        });
    }

    addToConnections(userId) {
        alert(`${userId}`);
        let status = fetch('/api/profiles/add', {
            method: 'POST',
            body: JSON.stringify({ userId }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tokenService.getToken()
            }
        }).then(res => {
            if (res.status === 200) console.log('ok')
            else console.log('not ok');
        })
    }

    //////
    componentDidMount = () => {
        this.findTenUsers();
    }
    render() {
        return (
            <div className='FindPeople'>
                FindPeople page
                {this.state.users.map(user => (
                    <div className='FindPeople-userBox' key={user._id}>
                        {user.name}
                        <button onClick={() => {
                            this.addToConnections(user._id)
                        }}>add</button>
                    </div>
                ))}
            </div>
        )
    };
}



export default FindPeople;