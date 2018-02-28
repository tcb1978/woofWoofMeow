import React, { Component } from 'react';
import Aux from '../../../../hoc/Aux';
import './Job.css';

class Job extends Component {
    constructor () {
        super();
        this.state = { 
            isHidden: true
         }
    }

    showDetails () {
        this.setState(prevState => ({ isHidden: !prevState.isHidden }));
    }

    render() {
        const { job, months, days } = this.props;

        return (
            <Aux>
                <li className="job">
                    <div className="job-item">
                        JOB ITEM
                    </div>
                    
                    <div className="Checkin">
                        <div className="AvatarDisplay">
                            <div className="AnimalAvatar"><span>Dog's Name</span></div>
                            <div className="AnimalAvatar"><span>Dog's Name</span></div>
                            <div className="AnimalAvatar"><span>Dog's Name</span></div>
                        </div>
                        <div className="TodaysService">
                            <div className="ServiceLength">30 min </div>
                            <div className="WalkOrPark"> walk</div>
                        </div>
                        <div className="AddressContact">
                            <div className="Address">
                                <div>Address</div>
                                1234 N. Somekinda Ave.
                            </div>
                            <div className="OwnerPhone">
                                <div>Owners's Phone</div>
                                555-555-5555
                            </div>
                        </div>
                        <div className="Cancel">
                            <form className="form-group">
                                <textarea className="cancel-text" name="message" rows="2" cols="80" defaultValue="Cancel message..."></textarea>
                                <button className="submit-cancel" >Cancel</button>
                            </form>
                        </div>
                    </div>
                </li>
            </Aux>
        )
    }
};

export default Job;