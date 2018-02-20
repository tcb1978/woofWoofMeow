import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Availibility.css';

import axios from 'axios';

class Availability extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: 1,
            month: '',
            day: '',
            begin_time: '',
            end_time: '',
            am_pm: '',
            monday: ''
        }
    }

    handleChange(property, event) {
        event.preventDefault();
        this.setState({ [property]: event.target.value })
        
    }

    render() {
        return (
            <Aux>                
                <div className="Availablity">
                    <h1>Availability</h1>
                    <div className="WeekLongCalendar">
                        <div className="WeekdayHeader">
                            <div className="Times">
                                <label className="Day left-radius tab-radius"><span>Monday</span></label>
                                <div className="border-left border-bottom border mobile-radius bottom-left-radius">
                                    <select
                                        className="hours"
                                        type="text"
                                        onChange={(event) => this.handleChange("monday", event)}>
                                        <option value="6AM - 2PM">6AM - 2PM</option>
                                        <option value="2PM - 10PM">2PM - 10PM</option>
                                    </select>
                                    <p>{this.state.monday}</p>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day tab-radius"><span>Tuesday</span></label>
                                <div className="border-left border-bottom border mobile-radius">
                                    <select
                                        className="hours"
                                        type="text">
                                        <option value="6AM - 2PM">6AM - 2PM</option>
                                        <option value="2PM - 10PM">2PM - 10PM</option>
                                </select>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day tab-radius"><span>Wednesday</span></label>
                                <div className="border-left border-bottom border mobile-radius">
                                    <select
                                        className="hours"
                                        type="text">
                                        <option value="6AM - 2PM">6AM - 2PM</option>
                                        <option value="2PM - 10PM">2PM - 10PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day tab-radius"><span>Thursday</span></label>
                                <div className="border-left border-bottom border mobile-radius">
                                    <select
                                        className="hours"
                                        type="text">
                                        <option value="6AM - 2PM">6AM - 2PM</option>
                                        <option value="2PM - 10PM">2PM - 10PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day tab-radius"><span>Friday</span></label>
                                <div className="border-left border-bottom border mobile-radius">
                                    <select
                                        className="hours"
                                        type="text">
                                        <option value="6AM - 2PM">6AM - 2PM</option>
                                        <option value="2PM - 10PM">2PM - 10PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day tab-radius"><span>Saturday</span></label>
                                <div className="border-left border-bottom border mobile-radius">
                                    <select
                                        className="hours"
                                        type="text">
                                        <option value="6AM - 2PM">6AM - 2PM</option>
                                        <option value="2PM - 10PM">2PM - 10PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day right-radius tab-radius"><span>Sunday</span></label>
                                <div className="border-left border-bottom border-right border bottom-right-radius mobile-radius">
                                    <select
                                        className="hours"
                                        type="text">
                                        <option value="6AM - 2PM">6AM - 2PM</option>
                                        <option value="2PM - 10PM">2PM - 10PM</option>
                                    </select>
                                </div>
                            </div>
                            
                        </div>
                        <button className="set-btn">Submit</button>
                    </div>
                </div>
            </Aux>
        )
    }
};

export default Availability;