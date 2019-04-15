import React from 'react';

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
                {this.props.user.name}
                < button onClick={this.handleButtonClick} >invite</button>
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