import React from 'react';

import './ProfilePage.css';
import CreateProfile from './components/CreateProfile/CreateProfile';
import tokenService from '../../utils/tokenService';
const BASE_URL = '/api/profiles';



class ProfilePage extends React.Component {
    getProfile = async () => {
        try {
            let profile = await fetch(`${BASE_URL}/${this.props.user._id}`).then(res => res.text());
            console.log(profile);
        } catch {
            console.log('error');
        }
    }

    formatToBinary(num) {
        return num.toString(2).padStart(8, '0');
    }
    render() {

        if (this.props.user && this.props.user.profile) {
            // let profile = this.getProfile(this.props.user._id);
            return (
                <div className='ProfilePage'>
                    <h1>{this.props.user.name}</h1>
                    <div className='ProfilePage-description'>
                        {this.props.user.profile.description}
                    </div>
                    <div className='ProfilePage-photo'>
                        <img src={this.props.user.profile.photo ? this.props.user.profile.photo : ''} alt='profile' />
                    </div>
                    <div className='ProfilePage-interests'>
                        <h3>I like: </h3>
                        {this.props.user.profile.interests.map(element => (
                            <div>{element}</div>
                        ))}
                    </div>
                    <div className='ProfilePage-connections'>
                        <h3>Connections: </h3>
                        {this.formatToBinary(this.props.user.connections.length)}
                    </div>
                    <button type="button" className='btn btn-success'>edit</button>
                </div>
            )
        } else if (this.props.user) {
            return (
                <CreateProfile updateUser={this.props.updateUserState} userId={this.props.user._id} />
            )
        }
        else {
            return (
                <div className='ProfilePage'>
                    Please log in to see your account...
                </div>
            )
        }

    }
}

export default ProfilePage;