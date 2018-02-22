import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Requests.css';
import History from '../../History/History';
import Jobs from '../../../components/Petowner/Jobs/Jobs';

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

                    <Jobs />

                    <div className="HistoryContainer">
                        <h1>History</h1>
                        <div className="history-wrapper">
                            <div className="status-row">
                                <div className="avatar"></div>
                                <div className="name">Mark</div>
                                <div className="date">
                                    <date>January 10</date>
                                </div>
                                <div className="StartFinish">
                                    <div className="Start"><time className="">1:28pm- </time></div>
                                    <div className="Finish"><time className="">     2:28pm</time></div>
                                </div>
                            </div>
                            <div className="HistoryDropDown">
                                <div className="AvatarDisplay">
                                    <div className="AnimalAvatar"><span>Dog's Name</span></div>
                                    <div className="AnimalAvatar"><span>Dog's Name</span></div>
                                    <div className="AnimalAvatar"><span>Dog's Name</span></div>
                                </div>
                                <div className="TodaysService">
                                    <div className="ServiceLength">30 min </div>
                                    <div className="WalkOrPark">   walk</div>
                                </div>
                            </div>
                            <div className="status-row">
                                <div className="avatar"></div>
                                <div className="name">Mark</div>
                                <div className="date">
                                    <date>January 10</date>
                                </div>
                                <div className="StartFinish">
                                    <div className="Start"><time className="">1:28pm- </time></div>
                                    <div className="Finish"><time className="">     2:28pm</time></div>
                                </div>
                            </div>
                            <div className="status-row">
                                <div className="avatar"></div>
                                <div className="name">Mark</div>
                                <div className="date">
                                    <date>January 10</date>
                                </div>
                                <div className="StartFinish">
                                    <div className="Start"><time className="">1:28pm- </time></div>
                                    <div className="Finish"><time className="">     2:28pm</time></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="all-rights-reserved"><span>&copy; All rights reserved.</span></div>
                </div>
            </Aux>
        )
    }
}

export default Requests