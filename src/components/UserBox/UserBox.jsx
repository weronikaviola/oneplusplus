import React from 'react';
import { Link } from 'react-router-dom';
import profileService from '../../utils/profileService';

import '../../pages/People/components/FindPeople/FindPeople.css';

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
                <div style={{
                    border: '1px solid gray',
                    borderRadius: '10px',
                    padding: 5,
                }}>
                    {this.props.user.name}<br />
                    <div className='UserBox-buttons'>
                        <div><Link
                            to={`/profile/${this.props.user._id}`}
                            className='btn btn-default btn-sm btn-info'
                        >
                            01101101 01101111 01110010 01100101
                        </Link></div>
                        <div>
                            < button className='btn btn-default btn-sm btn-success'
                                onClick={this.handleButtonClick} >01100001 01100100 01100100 00100001 </button></div>
                    </div>
                </div>
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