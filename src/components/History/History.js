import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './History.css';

class History extends Component {
    render() {
        const appointment_history = <div className="AppontmentHistory">
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
        </div>
        return (
            <Aux>
                <div className="HistoryContainer">
                    <h1>History</h1>
                    <div className="HistoryDropDown">
                        <div className="Appointment tab">
                            <div className="avatar"></div>
                            <div className="day"><h3>March 24</h3></div>
                            <div className="time"><h3>2:30pm - 3:00pm</h3></div>
                        </div>
                        {appointment_history}
                        <div className="Appointment tab">
                            <div className="avatar"></div>
                            <div className="day"><h3>March 24</h3></div>
                            <div className="time"><h3>2:30pm - 3:00pm</h3></div>
                        </div>
                        <div className="Appointment tab">
                            <div className="avatar"></div>
                            <div className="day"><h3>March 24</h3></div>
                            <div className="time"><h3>2:30pm - 3:00pm</h3></div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
};

export default History;