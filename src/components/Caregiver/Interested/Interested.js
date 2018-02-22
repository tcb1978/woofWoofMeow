import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Interested.css';

class Interested extends Component {

    render() {
        return (
            <Aux>
                <div className="Interested">
                    <h1>Interested</h1>
                    <div className="interested-row-box">
                        <div className="caregiverRow">
                            <div>
                                <div className="caregiver-avatar"></div>
                                <div className="caregiver-name">Mark</div>
                            </div>
                            <div>
                                <button className="btn btn-primary cancel">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
};

export default Interested;