import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Availibility.css';

class Availability extends Component {
    render() {
        return (
            <Aux>                
                <div className="Availablity">
                    <div className="container">
                        <h1>Availability</h1>
                    </div>
                </div>
            </Aux>
        )
    }
};

export default Availability;