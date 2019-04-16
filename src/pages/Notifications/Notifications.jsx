import React from 'react'

import notificationService from '../../utils/notificationService';
import SingleNotification from './SingleNotification/SingleNotification';

class Notifications extends React.Component {
    constructor(props) {
        super();
        this.state = { message: '' }
    }

    notificationColors = {
        'newMessage': 'blue',
        'connectionInvite': 'green',
    }
    notificationMessages = {
        'newMessage': 'sent you a new message',
        'connectionInvite': 'invited you to connect',
    }
    // lifecycle methods
    componentDidMount = async () => {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                01101110 01101111 01110100 01101001 01100110 01101001 01100011 01100001 01110100 01101001 01101111 01101110 01110011
                {this.props.notifications.map(n => (
                    <SingleNotification
                        element={n}
                        displayNoInvites={this.props.displayNoInvites}
                        update={this.props.update} />
                ))}
            </div>
        )
    };
}

export default Notifications