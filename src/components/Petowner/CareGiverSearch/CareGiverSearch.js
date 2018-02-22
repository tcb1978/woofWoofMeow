import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Aux from '../../../hoc/Aux';
import './CareGiverSearch.css';
import axios from 'axios';


class CareGiverSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            service: '30 min walk ',
            proximity: '3 miles ',
            time: '6:00 am ',
            month : '1',
            day : '1',
            isHidden : true,
        }
    }

    componentDidMount() {
        axios.get(`/caregivers`).then(response => {
            const caregivers = response.data;
            this.setState(previous => ({
                isHidden: !previous.isHidden,
                caregivers: caregivers
            }))
        }).catch(error => console.log(error))
    }

    filterMethod = () => {
        const { proximity, time } = this.state;
        axios.get(`/caregivers/search?proximity=${proximity}&time=${time}`)
        .then(response => {
            this.setState(previous => ({
                isHidden: !previous.isHidden,
            }))
        })
        .catch(error => console.log(error))
    }

    onHandleServicePicked = (event) => {
        this.setState({
            service : event.target.value
        })
    }

    onHandleProximityPicked = (event) => {
        this.setState({
            proximity: event.target.value
        })
    }

    onHandleTimePicked = (event) => {
        this.setState({
            time: event.target.value
        })
    }

    onHandleMonthPicked = (event) => {
        this.setState({
            month: event.target.value
        })
    }

    onHandleDayPicked = (event) => {
        this.setState({
            day: event.target.value
        })
    }

    toggleHiddenClear = () => {
        this.setState({
            isHidden: true
        })
    }

    onHandleRequestCaregiver = () => {
        alert('Requested!!')
    }

    render () {
        const date = new Date();
        const year = date.getFullYear();
        const available = this.state.caregivers
        const Child = () => (<div>
            {this.state.caregivers.map((person, index) => (
                <div key={index} className="caregiver-row top-bottom">
                    <div className="avatar"></div>
                    <div className="caregiver">{person.first_name}</div>
                    <div className="space-around">
                        <button onClick={this.toggleHiddenClear} className="btn btn-request">Request</button>
                    </div>
                </div>
            ))}
        </div>);
        
        return (        
            <Aux>
                <div className="CaregiverFilterContainer">
                    <h1>Find Caregiver</h1>
                    <div className="SearchFilterContainer">
                        <Tabs>
                            <TabList>
                                <Tab onClick={this.toggleHiddenClear.bind(this)}>Proximity</Tab>
                                <Tab onClick={this.toggleHiddenClear.bind(this)}>Time</Tab>
                                <Tab onClick={this.filterMethod}><i className="fas fa-search"></i></Tab>
                            </TabList>

                            <TabPanel>
                                <div className="proximity top-bottom">
                                    <div className="col-xs-12 col-sm-12">
                                        <div className="form-group">
                                            <label>Service</label>
                                            <select
                                                value={this.state.value}
                                                onChange={(e) => this.onHandleServicePicked(e)} className="form-control"
                                                name="Service">
                                                <option value=''>--Select A Service--</option>
                                                <option value="30 minute walk">30 minute walk</option>
                                                <option value="60 minute walk">60 minute walk</option>
                                                <option value="60 minutes dog park">60 minutes dog park</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12">
                                        <div className="form-group">
                                            <label>Proximity</label>
                                            <select
                                                value={this.state.value}
                                                onChange={(e) => this.onHandleProximityPicked(e)} 
                                                className="form-control" name="Proximity">
                                                <option value=''>--Select Proximity--</option>
                                                <option value="3 miles">3 miles</option>
                                                <option value="5 miles">5 miles</option>
                                                <option value="8 miles">8 miles</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="time top-bottom">
                                    <div className="col-xs-12 col-sm-4">
                                        <div className="form-group">
                                            <label>Begin Time</label>
                                            <select
                                                value={this.state.value}
                                                onChange={(e) => this.onHandleTimePicked(e)}
                                                className="form-control"
                                                name="Time">
                                                <option value=''>--Select Time--</option>
                                                <option value="6:00 am">6:00 am</option>
                                                <option value="6:30 am">6:30 am</option>
                                                <option value="7:30 am">7:30 am</option>
                                                <option value="8:00 am">8:00 am</option>
                                                <option value="8:30 am">8:30 am</option>
                                                <option value="9:00 am">9:00 am</option>
                                                <option value="9:30 am">9:30 am</option>
                                                <option value="10:00 am">10:00 am</option>
                                                <option value="10:30 am">10:30 am</option>
                                                <option value="11:00 am">11:00 am</option>
                                                <option value="11:30 am">11:30 am</option>
                                                <option value="12:00 pm">12:00 pm</option>
                                                <option value="12:30 pm">12:30 pm</option>
                                                <option value="1:00 pm">1:00 pm</option>
                                                <option value="1:30 pm">1:30 pm</option>
                                                <option value="2:00 pm">2:00 pm</option>
                                                <option value="2:30 pm">2:30 pm</option>
                                                <option value="3:00 pm">3:00 pm</option>
                                                <option value="4:00 pm">4:00 pm</option>
                                                <option value="4:30 pm">4:30 pm</option>
                                                <option value="5:00 pm">5:00 pm</option>
                                                <option value="5:30 pm">5:30 pm</option>
                                                <option value="6:00 pm">6:00 pm</option>
                                                <option value="6:30 pm">6:30 pm</option>
                                                <option value="7:00 pm">7:00 pm</option>
                                                <option value="7:30 pm">7:30 pm</option>
                                                <option value="8:30 pm">8:30 pm</option>
                                                <option value="9:00 pm">9:00 pm</option>
                                                <option value="9:30 pm">9:30 pm</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4">
                                        <div className="form-group">
                                            <label>Month</label>
                                            <select
                                                value={this.state.value}
                                                onChange={(e) => this.onHandleMonthPicked(e)}
                                                className="form-control"
                                                name="Time">
                                                <option value=''>--Select Month--</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4">
                                        <div className="form-group">
                                            <label>Day</label>
                                            <select
                                                value={this.state.value}
                                                onChange={(e) => this.onHandleDayPicked(e)}
                                                className="form-control"
                                                name="Time">
                                                <option value=''>--Select Day--</option>
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'>4</option>
                                                <option value='5'>5</option>
                                                <option value='6'>6</option>
                                                <option value='7'>7</option>
                                                <option value='8'>8</option>
                                                <option value='9'>9</option>
                                                <option value='10'>10</option>
                                                <option value='11'>11</option>
                                                <option value='12'>12</option>
                                                <option value='13'>13</option>
                                                <option value='14'>14</option>
                                                <option value='15'>15</option>
                                                <option value='16'>16</option>
                                                <option value='17'>17</option>
                                                <option value='18'>18</option>
                                                <option value='19'>19</option>
                                                <option value='20'>20</option>
                                                <option value='21'>21</option>
                                                <option value='22'>22</option>
                                                <option value='23'>23</option>
                                                <option value='24'>24</option>
                                                <option value='25'>25</option>
                                                <option value='26'>26</option>
                                                <option value='27'>27</option>
                                                <option value='28'>28</option>
                                                <option value='29'>29</option>
                                                <option value='30'>30</option>
                                                <option value='31'>31</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-type top-bottom">
                                    <h3>{this.state.service}</h3>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="time top-bottom">
                                    <h3><date>{this.state.month}/{this.state.day}/{year} </date> <time>  {this.state.time}</time></h3>
                                </div>
                                <div className="service-type top-bottom">
                                    <h3>{this.state.service}</h3>
                                </div>
                                {!this.state.isHidden && <Child />}
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </Aux>
        )
    }
};

export default CareGiverSearch;