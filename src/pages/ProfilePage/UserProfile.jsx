import React from 'react';
import { Link } from 'react-router-dom';
import profileService from '../../utils/profileService';
// import './MyProfilePage.css';
import DisplayProfile from './components/DisplayProfile/DisplayProfile';



//cache the user here
class UserProfile extends React.Component {
    userId = this.props.match.params.id;
    state = {
        user: null,
        message: ''
    }
    fetchUserInfo = async () => {
        let response = await fetch(`/api/profiles/${this.userId}`).then(res => res.json());
        if (!response.err) {
            this.setState({
                user: response
            });
        } else {
            this.state.message = 'Server Error, try again'
        }
    }

    componentDidMount = () => {
        this.fetchUserInfo();
    }

    render() {
        return (
            <div className='contentSite'>
                <Link className='BackBtn' to='/people'>back</Link>
                <div className='red-text'>{this.state.message}</div>
                {(this.state.user) ?
                    <div className='UserProfile'>
                        <DisplayProfile user={this.state.user} />
                    </div>
                    :
                    <div>loading...</div>
                }
                <button
                    className='btn btn-default'
                    onClick={() => {
                        profileService.addToConnections(this.state.user._id)
                        alert('invitation to connect has been sent')
                    }}
                >
                    01100001 01100100 01100100
                </button>
            </div>
        )
    }
}

export default UserProfile;