import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
// import './AnimalUploader.css';

import { connect } from 'react-redux';
import { animalUrlSend } from '../../redux/ducks/reducer';

class AnimalUploader extends Component {
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
                this.props.animalUrlSend(response.text)
                console.log('response -> ', response.text)
                if (error) console.log(error);
                console.log('File Uploaded Succesfully');
            })
    }

    render() {
        return (
            <div>
                Image:
                <Dropzone className="dropzone form-control" onDrop={this.onDrop} multiple={false}>
                    <div>Drop a file here, or click to select a file to upload.</div>
                    {/* <div>{this.state.url}</div> */}
                </Dropzone>
                {/* think how to make it the actual link. the <Link> is not working for some reason */}
                <div>{this.state.url}</div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    animalUrlSend: animalUrlSend
}

export default connect(null, mapDispatchToProps)(AnimalUploader);