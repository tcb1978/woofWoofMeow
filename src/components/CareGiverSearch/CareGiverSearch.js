import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Aux from '../../hoc/Aux';
import './CareGiverSearch.css';


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
                                    <h3>Within <span>50</span> miles</h3>
                                </div>
                                <div className="service-type top-bottom">
                                    <h3>60 min dog park</h3>
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