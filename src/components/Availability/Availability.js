import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Availibility.css';

class Availability extends Component {
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
                                    <span classNames="hours">6:00-2:00</span>
                                    <span classNames="am-pm">AM</span>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day tab-radius"><span>Tuesday</span></label>
                                <div className="border-left border-bottom border mobile-radius">
                                    <span classNames="hours">6:00-2:00</span>
                                    <span classNames="am-pm">AM</span>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day tab-radius"><span>Wednesday</span></label>
                                <div className="border-left border-bottom border mobile-radius">
                                    <span classNames="hours">6:00-2:00</span>
                                    <span classNames="am-pm">AM</span>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day tab-radius"><span>Thursday</span></label>
                                <div className="border-left border-bottom border mobile-radius">
                                    <span classNames="hours">6:00-2:00</span>
                                    <span classNames="am-pm">AM</span>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day tab-radius"><span>Friday</span></label>
                                <div className="border-left border-bottom border mobile-radius">
                                    <span classNames="hours">6:00-2:00</span>
                                    <span classNames="am-pm">AM</span>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day tab-radius"><span>Saturday</span></label>
                                <div className="border-left border-bottom border mobile-radius">
                                    <span classNames="hours">6:00-2:00</span>
                                    <span classNames="am-pm">AM</span>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day right-radius tab-radius"><span>Sunday</span></label>
                                <div className="border-left border-bottom border-right border bottom-right-radius mobile-radius">
                                    <span classNames="hours">6:00-2:00</span>
                                    <span classNames="am-pm">AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
};

export default Availability;