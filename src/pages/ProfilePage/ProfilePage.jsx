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
    render() {

        if (this.props.user && this.props.user.profile) {
            // let profile = this.getProfile(this.props.user._id);
            return (
                <div className='ProfilePage'>
                    <h1>{this.props.user.name}</h1>
                    <div className='ProfilePage-description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus possimus maiores officiis sapiente nam dolor sunt, in, ducimus dolorem facere quod beatae quo quasi, suscipit facilis eligendi harum incidunt!
                    </div>
                    <div className='ProfilePage-photo'>
                        <img src='https://yt3.ggpht.com/a-/AAuE7mDWUMj2x58BEADicaLmA9MTvdgZEWpzJNtM5w=s900-mo-c-c0xffffffff-rj-k-no' />
                    </div>
                    <div className='ProfilePage-interests'>
                        <h3>I like: </h3>
                        asjdlfkjaslkdfjlaskdjflkajs
                        asldkfjlaskjdflkasjdlf
                        aksdjflkasjdf
                    </div>
                    <div className='ProfilePage-connections'>
                        <h3>Connections: </h3>
                        00000001
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