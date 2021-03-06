import React from 'react';

// import './MyProfilePage.css';
import CreateProfile from './components/CreateProfile/CreateProfile';
import DisplayProfile from './components/DisplayProfile/DisplayProfile';
import tokenService from '../../utils/tokenService';
const BASE_URL = '/api/profiles';



class MyProfilePage extends React.Component {
    render() {

        if (this.props.user && this.props.user.profile) {
            return (
                <DisplayProfile user={this.props.user} />
            );
        } else if (this.props.user) {
            return (
                <CreateProfile updateUser={this.props.updateUserState} />
            );
        }
        else {
            return (
                <div className='ProfilePage contentSite'>
                    Please log in to see this page...
                </div>
            );
        }

    }
}

export default MyProfilePage;