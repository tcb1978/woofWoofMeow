import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Availibility.css';

import axios from 'axios';

class Availability extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: 9,
            day: '',
            begin_time: '',
            end_time: '',
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: '',
            saturday: '',
            sunday: ''
        }
    }

    componentDidMount() {
        const { user_id } = this.state;
        axios.get('/available/user', {
            user_id: user_id
        })
        .then(response => {
           
            const arr = response.data;
            let monday = arr.filter(weekday => weekday.day === 0)
            this.setState({ monday: monday[0].time_range })
           

            let tuesday = arr.filter(weekday => weekday.day === 1)
            this.setState({ tuesday: tuesday[0].time_range })
           

            let wednesday = arr.filter(weekday => weekday.day === 2)
            this.setState({ wednesday: wednesday[0].time_range })
            

            let thursday = arr.filter(weekday => weekday.day === 3)
            this.setState({ thursday: thursday[0].time_range })
           

            let friday = arr.filter(weekday => weekday.day === 4)
            this.setState({ friday: friday[0].time_range })
           

            let saturday = arr.filter(weekday => weekday.day === 5)
            this.setState({ saturday: saturday[0].time_range })
           

            let sunday = arr.filter(weekday => weekday.day === 6)
            this.setState({ sunday: sunday[0].time_range })
           

        })
        .catch(error => console.log(error))
    }

    handleMondayChange(event) {
        event.preventDefault();
        const { user_id } = this.state;
        this.setState({ monday: event.target.value })
        axios.put('/update/available', {
            day: 0,
            time_range: event.target.value,
            user_id: user_id
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    handleTuesdayChange(event) {
        event.preventDefault();
        const { user_id } = this.state;
        this.setState({ tuesday: event.target.value })
        axios.put('/update/available', {
            day: 1,
            time_range: event.target.value,
            user_id: user_id
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    handleWednesdayChange(event) {
        event.preventDefault();
        const { user_id } = this.state;
        this.setState({ wednesday: event.target.value })
        axios.put('/update/available', {
            day: 2,
            time_range: event.target.value,
            user_id: user_id
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    handleThursdayChange(event) {
        event.preventDefault();
        const { user_id } = this.state;
        this.setState({ thursday: event.target.value })
        axios.put('/update/available', {
            day: 3,
            time_range: event.target.value,
            user_id: user_id
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    handleFridayChange(event) {
        event.preventDefault();
        const { user_id } = this.state;
        this.setState({ friday: event.target.value })
        axios.put('/update/available', {
            day: 4,
            time_range: event.target.value,
            user_id: user_id
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    handleSaturdayChange(event) {
        event.preventDefault();
        const { user_id } = this.state;
        this.setState({ saturday: event.target.value })
        axios.put('/update/available', {
            day: 5,
            time_range: event.target.value,
            user_id: user_id
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    handleSundayChange(event) {
        event.preventDefault();
        const { user_id } = this.state;
        this.setState({ sunday: event.target.value })
        axios.put('/update/available', {
            day: 6,
            time_range: event.target.value,
            user_id: user_id
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
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
                                        className="form-control"
                                        type="text"
                                        value={this.state.monday}
                                        onChange={(event) => this.handleMondayChange(event)}>
                                        <option value="6AM - 2PM">6AM - 2PM</option>
                                        <option value="2PM - 10PM">2PM - 10PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day tab-radius"><span>Tuesday</span></label>
                                <div className="border-left border-bottom border mobile-radius">
                                    <select
                                        className="form-control"
                                        type="text"
                                        value={this.state.tuesday}
                                        onChange={(event) => this.handleTuesdayChange(event)}>
                                        <option value="6AM - 2PM">6AM - 2PM</option>
                                        <option value="2PM - 10PM">2PM - 10PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day tab-radius"><span>Wednesday</span></label>
                                <div className="border-left border-bottom border mobile-radius">
                                    <select
                                        className="form-control"
                                        type="text"
                                        value={this.state.wednesday}
                                        onChange={(event) => this.handleWednesdayChange(event)}>
                                        <option value="6AM - 2PM">6AM - 2PM</option>
                                        <option value="2PM - 10PM">2PM - 10PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day tab-radius"><span>Thursday</span></label>
                                <div className="border-left border-bottom border mobile-radius">
                                    <select
                                        className="form-control"
                                        type="text"
                                        value={this.state.thursday}
                                        onChange={(event) => this.handleThursdayChange(event)}>
                                        <option value="6AM - 2PM">6AM - 2PM</option>
                                        <option value="2PM - 10PM">2PM - 10PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day tab-radius"><span>Friday</span></label>
                                <div className="border-left border-bottom border mobile-radius">
                                    <select
                                        className="form-control"
                                        type="text"
                                        value={this.state.friday}
                                        onChange={(event) => this.handleFridayChange(event)}>
                                        <option value="6AM - 2PM">6AM - 2PM</option>
                                        <option value="2PM - 10PM">2PM - 10PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day tab-radius"><span>Saturday</span></label>
                                <div className="border-left border-bottom border mobile-radius">
                                    <select
                                        className="form-control"
                                        type="text"
                                        value={this.state.saturday}
                                        onChange={(event) => this.handleSaturdayChange(event)}>
                                        <option value="6AM - 2PM">6AM - 2PM</option>
                                        <option value="2PM - 10PM">2PM - 10PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="Times">
                                <label className="Day right-radius tab-radius"><span>Sunday</span></label>
                                <div className="border-left border-bottom border-right border bottom-right-radius mobile-radius">
                                    <select
                                        className="form-control"
                                        type="text"
                                        value={this.state.sunday}
                                        onChange={(event) => this.handleSundayChange(event)}>
                                        <option value="6AM - 2PM">6AM - 2PM</option>
                                        <option value="2PM - 10PM">2PM - 10PM</option>
                                    </select>
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