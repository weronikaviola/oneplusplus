import React from 'react';

import tokenService from '../../../../utils/tokenService';

import '../../ProfilePage.css';

class DisplayProfile extends React.Component {
    constructor(props) {
        super();
        this.state = {
            user: props.user
        }
    }
    componentDidMount() {
        this.getLatestUserData()
    }

    getLatestUserData = async () => {
        let data = await fetch('/api/profiles/', {
            headers: {
                'Authorization': 'Bearer ' + tokenService.getToken()
            }
        }).then(res => res.json());
        this.setState({
            user: data
        });
    }

    formatToBinary(num) {
        return num.toString(2).padStart(8, '0');
    }
    render() {
        return (
            <div className='ProfilePage contentSite' >
                <div className='ProfilePage-photo'>
                    <img src={this.props.user.profile.photo ? this.props.user.profile.photo : ''} alt='profile' />
                </div>
                <div className='ProfilePage-json'>
                    <h1><b>{`${this.props.user.name}`}</b>{'{'}</h1>
                    <div className='ProfilePage-jsonEl'>
                        <h1>{`"descripiton": "${this.props.user.profile.description}",`}</h1>
                    </div>
                    <div className='ProfilePage-jsonEl'>
                        <h1>{`"interests": [${this.props.user.profile.interests.map(int => (`"${int.trim()}"`))}],`}</h1>
                    </div>
                    <div className='ProfilePage-jsonEl'>
                        <h1>{`"connections": "${this.formatToBinary(this.props.user.connections.length)}"`}</h1>
                    </div>
                    <div className='profilePage-json'>
                        <h1>}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayProfile;