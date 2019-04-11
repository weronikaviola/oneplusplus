import React from 'react';

// import '../../MyProfilePage.css';
import '../../ProfilePage.css';

class DisplayProfile extends React.Component {

    formatToBinary(num) {
        return num.toString(2).padStart(8, '0');
    }
    render() {
        return (
            <div className='ProfilePage' >
                <div className='ProfilePage-photo'>
                    <img src={this.props.user.profile.photo ? this.props.user.profile.photo : ''} alt='profile' />
                </div>
                <div className='ProfilePage-json'>
                    <h1><b>{`${this.props.user.name}`}</b>{'{'}</h1>
                    <div className='ProfilePage-jsonEl'>
                        <h1>{`"descripiton": "${this.props.user.profile.description}",`}</h1>
                    </div>
                    <div className='ProfilePage-jsonEl'>
                        <h1>{`"interests": [${this.props.user.profile.interests.map(int => (`"${int}"`))}],`}</h1>
                    </div>
                    <div className='ProfilePage-jsonEl'>
                        <h1>{`"connections": "${this.formatToBinary(this.props.user.connections.length)}"`}</h1>
                    </div>
                    <div className='profilePage-json'>
                        <h1>}</h1>
                    </div>
                </div>
                {/* <div className='ProfilePage-interests'>
                    <h3>I like: </h3>
                    {this.props.user.profile.interests.map(element => (
                        <div>{element}</div>
                    ))}
                </div>
                <div className='ProfilePage-connections'>
                    <h3>Connections: </h3>
                    {this.formatToBinary(this.props.user.connections.length)}
                </div>
                {this.props.stateUser === this.props.user &&
                    <button type="button" className='btn btn-success'>edit</button>} */}
            </div>
        )
    }
}

export default DisplayProfile;