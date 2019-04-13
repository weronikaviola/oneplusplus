import React from 'react';

import styles from './FileUpload.module.css';
import photoService from '../../utils/photoService';

class FileUpload extends React.Component {
    //needs a props called callbackMethod --> where do you want to add this photo? Profile? Post? 
    constructor() {
        super();
        this.state = {
            file: null
        };
    }

    submitAction = async (evt) => {
        evt.preventDefault();
        //fileAddress will be an object: {file: 'http://asdfkjs'}
        let fileAddress = await photoService.submitFile(this.state.file[0]);
        this.props.callbackMethod(fileAddress.file);
    }

    handleFileUpload = (evt) => {
        this.setState({
            file: evt.target.files
        });
    }

    render() {
        return (
            <div className={styles.fileUploaderDiv}>
                <label>Upload a photo</label>
                <div className={styles.fileDiv}>
                    {this.state.file &&
                        <img className={styles.image} src={`${URL.createObjectURL(this.state.file[0])}`} alt='weronika' />
                    }
                </div>
                <div className={styles.buttonDiv}>

                    <input label='upload file' type='file' onChange={this.handleFileUpload} />
                    {this.state.file &&
                        <button className='btn btn-default' onClick={this.submitAction} type='submit'>Confirm Photo</button>}
                </div>
            </div>
        )
    }
}

export default FileUpload;