import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './UpdateMessage.css';
import axios from 'axios';
import { connect } from 'react-redux';
import UpdateImageUploader from '../Uploader/UpdateImageUploader';

class UpdateMessage extends Component {
    constructor () {
        super();
        this.state = {
            showPopup: true,
            update_message: ''
        }
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    handleChange ( property, value ) {
        this.setState({ [property]: value });
    }

   sendMessage () {
       const { update_message } = this.state;
       const { job, updateImageUrl } = this.props;
       const update_image = updateImageUrl;
       const job_id = job.job_id;
       axios.put('/caregiver/jobs/update/message', {
           job_id: job.job_id,
           update_message,
           update_image
       })
       .then(response => {
            console.log(response);
       })
       .catch(error => console.log(error))
   }

    render () {
        const { user, job, updateImageUrl } = this.props;

        return (
            <Aux>
                <div className="UpdateOwnerContainer">
                    <div className="update-petowner-toggle">
                        <h1>Update</h1>
                    </div>
                    
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
                                <img src={updateImageUrl} className="img-responsive upload-image" />
                                <UpdateImageUploader />
                            </div>

                            <label className="message">Message</label>
                            <form className="form-group">
                                <textarea className="form-control" placeholder="Text" onChange={(e) => this.handleChange('update_message', e.target.value)}></textarea>
                            </form>
                            <button type="submit" className="btn btn-primary" onClick={() => this.sendMessage()}>Send</button>
                        </div>
                    
                    <div className="all-rights-reserved"><span>&copy; All rights reserved.</span></div>
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

export default connect(mapStateToProps)(UpdateMessage);