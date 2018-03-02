import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import '../UpdateMessage.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { register } from '../../../redux/ducks/reducer';
import UpdateImageUploader from '../../Uploader/UpdateImageUploader';

class PopupUpdate extends Component {
    constructor() {
        super();
        this.state = {
            job_id: '3',
            update_message: ''
        }
    }

    handleChange(property, value) {
        this.setState({ [property]: value });
    }

    sendMessage() {
        const { job_id, update_message } = this.state;
        let update_image = this.props.updateImageUrl;
        console.log('data', job_id, update_message, update_image);
        console.log('user', this.props.user);
        axios.put('/caregiver/jobs/update/message', {
            job_id,
            update_message,
            update_image
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log(error))
    }

    render() {
        const { user, updateImageUrl } = this.props;

        return (
            <Aux>
                <div className="widget">
                    <div className="widget-upper">
                        <div className="sender">
                            <div className="avatar"><img src={user.avatar} alt="avatar" /></div>
                            <div className="sender-name">{user.first_name}</div>
                        </div>
                        <span><i className="fas fa-caret-right"></i></span>
                        <div className="reciever-name">Jennifer</div>
                    </div>

                    <div className="take-a-picture">
                        <span><i className="fas fa-camera"></i></span>
                        <caption>Take picture</caption>
                        <img src={updateImageUrl} className="img-responsive upload-image"/>
                        <UpdateImageUploader />
                    </div>

                    <label className="message">Message</label>
                    <form className="form-group">
                        <textarea className="form-control" placeholder="Text" onChange={(e) => this.handleChange('update_message', e.target.value)}></textarea>
                    </form>
                    <button type="submit" className="btn btn-primary" onClick={() => this.sendMessage()}>Send</button>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        updateImageUrl: state.updateImageUrl,
    };
};

const mapDispatchToProps = {
    register: register
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupUpdate);