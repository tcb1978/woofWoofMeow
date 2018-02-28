import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Aux from '../../../hoc/Aux';
import './CareGiverSearch.css';
import axios from 'axios';
import { connect } from 'react-redux';

import Requests from '../Requests/Requests';

class CareGiverSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            caregivers: [],
            caregiver_id: '',
            petowner_id: '',
            service: '30 min walk ',
            proximity: '3 miles ',
            time: '6:00 am ',
            month : '1',
            day : '1',
            isHidden : true
        }
    }

    filterMethod = () => {
        const { proximity, time } = this.state;
        axios.get(`/caregivers/search?proximity=${proximity}&time=${time}`).then( caregivers => {

            console.log( 'Caregivers', caregivers.data );
            console.log( 'Proximity', proximity );
            console.log( 'Time', time );
            this.setState(previous => ({
                isHidden: !previous.isHidden,
                caregivers: caregivers.data
            }))

        }).catch(error => console.log(error))
    }

    onHandlePicked = (property, event) => {
        event.preventDefault();
        this.setState({ [property] : event.target.value})
    }

    toggleHiddenClear = () => {
        this.setState({ isHidden: true })
    }

    render () {
        const { caregivers, caregiver_id, petowner_id, service, proximity, time, month, day } = this.state;
        // Current month day
        const date = new Date();
        // Current year
        const year = date.getFullYear();
        // Current month's number of days
        const numOfDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        return (        
            <Aux>
                <div className="CaregiverSearch">
                    <div className="CaregiverFilterContainer">
                        <h1>Find Caregiver</h1>
                        <div className="SearchFilterContainer">
                            <Tabs>
                                <TabList>
                                    <Tab onClick={ () => this.toggleHiddenClear() }>Proximity</Tab>
                                    <Tab onClick={ () => this.toggleHiddenClear() }>Time</Tab>
                                    <Tab onClick={ () => this.filterMethod() }><i className="fas fa-search"></i></Tab>
                                </TabList>

                                <TabPanel>
                                    <div className="proximity top-bottom">
                                        <div className="col-xs-12 col-sm-12">
                                            <div className="form-group">
                                                <label>Service</label>
                                                <select
                                                    value={this.state.value}
                                                    onChange={(e) => this.onHandlePicked("service", e)} className="form-control"
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
                                                    value={this.state.proximity}
                                                    onChange={(e) => this.onHandlePicked("proximity", e)} 
                                                    className="form-control" name="Proximity">
                                                    <option value=''>--Select Proximity--</option>
                                                    <option value="3 miles">3 miles</option>
                                                    <option value="5 miles">5 miles</option>
                                                    <option value="7 miles">7 miles</option>
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
                                                    value={this.state.time}
                                                    onChange={(e) => this.onHandlePicked("time", e)}
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
                                                    value={this.state.month}
                                                    onChange={(e) => this.onHandlePicked("month", e)}
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
                                                    value={this.state.day}
                                                    onChange={(e) => this.onHandlePicked("day", e)}
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
                                </TabPanel>

                                <TabPanel>
                                    <div className="time top-bottom">
                                        <h3><date>{this.state.month} / {this.state.day} / {year}</date>&nbsp;&nbsp;&nbsp;<time>{this.state.time}</time></h3>
                                    </div>
                                </TabPanel>
                            </Tabs>
                            <div className="service-type">
                                <h3>{this.state.service}</h3>
                            </div>
                        </div>
                    </div>
                    <Requests caregivers={ caregivers }
                              caregiver_id={ caregiver_id }
                              petowner_id={ petowner_id }
                              service={ service }
                              proximity={ proximity }
                              time={ time }
                              month={ month }
                              day={ day }
                              filter={ this.filterMethod }/>
                </div>
            </Aux>
        )
    }
};

export default connect(state => state)(CareGiverSearch);