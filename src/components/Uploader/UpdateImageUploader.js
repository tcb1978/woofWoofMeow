import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

import { connect } from 'react-redux';
import { updateImageUrlSend } from '../../redux/ducks/reducer';

class UpdateImageUploader extends Component {
    constructor() {
        super();

        this.state = {
            url: ''
        }
    }

    onDrop = (files) => {
        request
            .post('/api/upload')
            .attach('avatar', files[0]) // 'avatar' has to match with another string in /server/index.js 
            .end((error, response) => {
                this.setState({ url: response.text })
                this.props.updateImageUrlSend(response.text)
                console.log('response -> ', response.text)
                if (error) console.log(error);
                console.log('File Uploaded Succesfully');
            })
    }

    render() {
        return (
            <div>
                <Dropzone className="dropzone form-control" onDrop={this.onDrop} multiple={false}>
                </Dropzone>

                <div>{this.state.url}</div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    updateImageUrlSend: updateImageUrlSend
}

export default connect(null, mapDispatchToProps)(UpdateImageUploader);