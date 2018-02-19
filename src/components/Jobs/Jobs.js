import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Jobs.css';

class Jobs extends Component {

    render() {

const checkin_appointment = <div className="Checkin">
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
                                    <textarea className="cancel-text" name="message" rows="2" cols="80">Cancel message..</textarea>
                                    <button className="submit-cancel" >Cancel</button>
                                </form>
                            </div>
                       </div>
        return (
            <Aux>
                <div className="JobsContainer">
                    <h1>Jobs</h1>
                    <div className="JobsDropDown">
                        <div className="Appointment tab">
                            <div className="paw"></div>
                            <div className="day"><h3>March 28</h3></div>
                            <div className="time"><h3>2:30pm - 3:00pm</h3></div>
                            <button className="btn jobCheckIn">Check In</button>
                        </div>
                        <div clasName="Appontment tab">
                            {checkin_appointment}
                        </div>
                        <div className="Appointment tab">
                            <div className="paw"></div>
                            <div className="day"><h3>March 28</h3></div>
                            <div className="time"><h3>2:30pm - 3:00pm</h3></div>
                            <button className="btn jobCheckIn">Check In</button>
                        </div>
                        <div className="Appointment tab">
                            <div className="paw"></div>
                            <div className="day"><h3>March 28</h3></div>
                            <div className="time"><h3>2:30pm - 3:00pm</h3></div>
                            <button className="btn jobCheckIn">Check In</button>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
};

export default Jobs;