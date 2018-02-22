import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Jobs.css';

class Jobs extends Component {
    constructor () {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <Aux>
                <div className="petowner-jobs">
                    <div className="jobs-container">
                    
                        <h1>Jobs</h1>
                        <div className="jobs">
                            <div className="job-item">
                                <div className="AvatarName">
                                    <div className="avatar"></div>
                                    <div className="name">Mark</div>
                                </div>
                                <date className="date">January 10</date>
                                <div><button className="btn message">Message</button></div>
                            </div>
                            <div className="details">
                                <h3>Wednesday</h3>
                                <div className="StartFinish">
                                    <div>Start&nbsp;: <time>1:28pm</time></div>
                                    <div>Finish&nbsp;: <time>2:28pm</time></div>
                                </div>
                                <div className="GoogleMap">
                                    <div className="map">This is a Google Map</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Aux>
        )
    }
};

export default Jobs;