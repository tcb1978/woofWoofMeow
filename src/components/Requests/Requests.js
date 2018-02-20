import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Requests.css';
import History from '../../components/History/History'

class Requests extends Component {
    render () {
        return (
            <Aux>
                <div className="StatusContainer">
                    <div className="RequestsContainer">
                        <h1>Requests</h1>
                        <div className="status-row">
                            <div className="avatar"></div>
                            <div className="name">Mark</div>
                            <div className="date">
                                <date>January 10</date>
                            </div>
                            <div className="space-around">
                                <button className="btn cancel">Cancel</button>
                            </div>
                        </div>
                        <div className="status-row">
                            <div className="avatar"></div>
                            <div className="name">Mark</div>
                            <div className="date">
                                <date>January 10</date>
                            </div>
                            <div className="space-around">
                                <button className="btn cancel">Cancel</button>
                            </div>
                        </div>
                    </div>
                    <div className="InterestedContainer">
                        <h1>Interested</h1>
                        <div className="status-row">
                            <div className="avatar"></div>
                            <div className="name">Mark</div>
                            <div className="date">
                                <date>January 10</date>
                            </div>
                            <div className="space-around">
                                <button className="btn message">Message</button>
                            </div>
                        </div>
                        <div className="status-row">
                            <div className="avatar"></div>
                            <div className="name">Mark</div>
                            <div className="date">
                                <date>January 10</date>
                            </div>
                            <div className="space-around">
                                <button className="btn message">Message</button>
                            </div>
                        </div>
                    </div>
                    <div className="MessageMapContainer">
                        <h1>Jobs</h1>
                        <div className="status-row">
                            <div className="avatar"></div>
                            <div className="name">Mark</div>
                            <div className="date">
                                <date>January 10</date>
                            </div>
                            <div className="space-around">
                                <button className="btn message">Message</button>
                            </div>
                        </div>
                        <div className="Details">
                            <h3>Wednesday</h3>
                            <div className="StartFinish">
                                <div className="Start">Start: <time className="btn">1:28pm</time></div>
                                <div className="Finish">Finish: <time className="btn">2:28pm</time></div>
                            </div>
                            <div className="GoogleMap"></div>
                        </div>
                    </div>
                    <div className="all-rights-reserved"><span>&copy; All rights reserved.</span></div>
                </div>
            </Aux>
        )
    }
}

export default Requests