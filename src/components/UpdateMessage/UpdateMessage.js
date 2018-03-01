import React from 'react';
import Aux from '../../hoc/Aux';
import './UpdateMessage.css';

const UpdateMessage = (props) => {
    return (
        <Aux>
            <div className="UpdateOwnerContainer">
                <h1>Update</h1>
                <div className="widget">
                    <div className="widget-upper">
                        <div className="sender">
                            <div className="avatar"></div>
                            <div className="sender-name">Mark</div>
                        </div>
                        <span><i class="fas fa-caret-right"></i></span>
                        <div className="reciever-name">Jennifer</div>
                    </div>
                    <div className="take-a-picture">
                        <span><i class="fas fa-camera"></i></span>
                        <caption>Take picture</caption>
                    </div>
                    <label>Message</label>
                    <form classname="form-group">
                        <textarea className="form-control" placeholder="Text"></textarea>
                    </form>
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
                <div className="all-rights-reserved"><span>2018 &copy; All rights reserved.</span></div>
            </div>
        </Aux>
    )
}

export default UpdateMessage;