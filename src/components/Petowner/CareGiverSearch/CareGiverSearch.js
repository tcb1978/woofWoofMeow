import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Aux from '../../../hoc/Aux';
import './CareGiverSearch.css';
// import axios from 'axios';


class CareGiverSearch extends Component {
    render () {
        return (
            <Aux>
                <div className="CaregiverFilterContainer">
                    <h1>Find Caregiver</h1>
                    <div className="SearchFilterContainer">
                        <Tabs>
                            <TabList>
                                <Tab>Proximity</Tab>
                                <Tab>Time</Tab>
                                <Tab><i className="fas fa-search"></i></Tab>
                            </TabList>

                            <TabPanel>
                                <div className="proximity top-bottom">
                                    <div className="col-xs-12 col-sm-2"><label>Proximity</label></div>
                                    <div className="col-xs-12 col-sm-10">
                                        <select className="form-control" name="Proximity">
                                            <option value="3 miles" selected>3 miles</option>
                                            <option value="5 miles">5 miles</option>
                                            <option value="8 miles">8 miles</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="service-type top-bottom">
                                    <div className="col-xs-12 col-sm-2"><label>Service</label></div>
                                    <div className="col-xs-12 col-sm-10">
                                        <select className="form-control" name="Service">
                                            <option value="30 minute walk" selected>30 minute walk</option>
                                            <option value="60 minute walk" selected>60 minute walk</option>
                                            <option value="60 minutes dog park">60 minutes dog park</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="caregiver-row top-bottom">
                                    <div className="avatar"></div>
                                    <div className="caregiver">Jennifer</div>
                                    <div className="space-around"><button className="btn btn-request">Request</button></div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="time top-bottom">
                                    <h3><date>01/ 29 / 2018 </date> <time>  1:30 am</time></h3>
                                </div>
                                <div className="service-type top-bottom">
                                    <h3>60 min walk</h3>
                                </div>
                                <div className="caregiver-row top-bottom">
                                    <div className="avatar"></div>
                                    <div className="caregiver">Jennifer</div>
                                    <div className="space-around"><button className="btn btn-request">Request</button></div>
                                </div>
                                <div className="caregiver-row top-bottom">
                                    <div className="avatar"></div>
                                    <div className="caregiver">Jennifer</div>
                                    <div className="space-around"><button className="btn btn-request">Request</button></div>
                                </div>
                                <div className="caregiver-row top-bottom">
                                    <div className="avatar"></div>
                                    <div className="caregiver">Jennifer</div>
                                    <div className="space-around"><button className="btn btn-request">Request</button></div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="time top-bottom">
                                    <h3><date>01/ 29 / 2018 </date> <time>  1:30 am</time></h3>
                                </div>
                                <div className="service-type top-bottom">
                                    <h3>60 min walk</h3>
                                </div>
                                <h1>Nobody Open</h1>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </Aux>
        )
    }
};

export default CareGiverSearch;