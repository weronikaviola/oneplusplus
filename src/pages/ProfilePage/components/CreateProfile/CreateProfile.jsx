import React from 'react';

import './CreateProfile.css';
import FileUpload from '../../../../components/FileUpload/FileUpload';

class CreateProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            description: '',
            photo: '',
            interests: '',
        }
    }

    addPhoto = (address) => {
        this.setState({
            photo: address
        });
    }

    isFormInvalid() {
        return !(this.state.description && this.state.photo && this.state.interests);
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        await this.createProfile(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async createProfile(data) {
        let url = `/api/profiles/${this.props.userId}/create`
        let user = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        console.log(user);
        this.props.updateUser(user.profile);
    }

    render() {
        return (
            <div className='CreateProfile'>
                <header className='header-footer'>Create New CreateProfile</header>
                <form className='forn-horizontal' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <div className='col-sm-12'>
                            <label>About you</label>
                            <input type='text' className='form-control' placeholder='description' value={this.state.description} name='description' autoComplete='off' onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-sm-12'>
                            <label>Enter your interests as a list of comma-separated values</label>
                            <input type='text' className='form-control' value={this.state.interests} name='interests' autoComplete='off' onChange={this.handleChange} pattern='(\w+, )+\w+' />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-sm-12'>
                            <FileUpload
                                callbackMethod={this.addPhoto}
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-sm-12 text-center'>
                            <button className="btn btn-default" disabled={this.isFormInvalid()}>OK</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProfile;