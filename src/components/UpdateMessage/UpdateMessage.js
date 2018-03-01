import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './UpdateMessage.css';
import { connect } from 'react-redux';

class UpdateMessage extends Component {
    constructor () {
        super();
        this.state = {
            message: ''
        }
    }

    handleChange ( property, value ) {
        this.setState({ [property]: value });
    }

    render () {
        const { user } = this.props;

        return (
            <Aux>
                <div className="UpdateOwnerContainer">
                    <h1>Update</h1>
                    <div className="widget">
                        <div className="widget-upper">
                            <div className="sender">
                                <div className="avatar"><img src={user.avatar} alt="avatar"/></div>
                                <div className="sender-name">{user.first_name}</div>
                            </div>
                            <span><i class="fas fa-caret-right"></i></span>
                            <div className="reciever-name">Jennifer</div>
                        </div>
                        <div className="take-a-picture">
                            <span><i class="fas fa-camera"></i></span>
                            <caption>Take picture</caption>
                        </div>
                        <label className="message">Message</label>
                        <form classname="form-group">
                            <textarea className="form-control" placeholder="Text" onChange={(e) => this.handleChange('message', e.target.value)}></textarea>
                        </form>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                    <div className="all-rights-reserved"><span>&copy; All rights reserved.</span></div>
                </div>
            </Aux>
        )
    }
}

export default connect(state => state)(UpdateMessage);