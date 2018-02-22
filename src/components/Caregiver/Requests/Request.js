import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Request.css';

class Requests extends Component {

    render() {
        return (
            <Aux>
                <div className="Requests">
                    <h1>Requests</h1>
                    <div className="request-row-box">
                        <div className="ClientRow">
                            <div>
                                <div className="client-avatar"></div>
                                <div className="client-name">Mark</div>
                            </div>
                            <div className="request-info">Date</div>
                            <div>
                                <button className="btn btn-primary interest">Interest</button>
                                <button className="btn btn-primary pass">Pass</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
};

export default Requests;