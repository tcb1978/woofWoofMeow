import React, { Component } from 'react';
import './AvailableTimes.css';

class AvailableTimes extends Component {
    constructor () {
        super();
        this.state = { 
            times: {}
        }
    }

    render () {
        const { months, days, day } = this.props;
        return (
            <div className="available-times">
                <div className="container">

                    {/* <h3>Available Times</h3> */}

                    <div className="month-day">
                        <div className="day">{ days[day.day] }</div>
                        <div className="date">{`${months[day.mm]} ${day.dd}, ${day.yyyy}`}</div>
                    </div>

                    <ul>
                        <li>
                            <div className="time">2:30pm - 3:00pm</div>
                            <button className="btn btn-primary">Request</button>
                        </li>
                        <li>
                            <div className="time">3:30pm - 4:00pm</div>
                            <button className="btn btn-primary">Request</button>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default AvailableTimes;