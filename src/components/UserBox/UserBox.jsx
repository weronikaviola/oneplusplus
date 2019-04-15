import React from 'react';
import { Link } from 'react-router-dom';
import profileService from '../../utils/profileService';

class UserBox extends React.Component {
    state = {
        visible: true,
    }
    handleButtonClick = () => {
        profileService.addToConnections(this.props.user._id)
        this.setState({
            visible: false
        });
        console.log(this.state);
    }

    render() {
        let content = this.state.visible ?
            <>
                {this.props.user.name}<br />
                <Link to={`/profile/${this.props.user._id}`}>
                    <button className='btn btn-default btn-sm'>details</button>
                </Link>
                < button className='btn btn-default btn-sm'
                    onClick={this.handleButtonClick} >invite</button>
            </>
            :
            <></>
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default UserBox;


//props: user