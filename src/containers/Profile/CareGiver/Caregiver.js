import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Bio from '../../../components/Bio/Bio';
import Availability from '../../../components/Availability/Availability';
import Calendar from '../../../components/Calendar/Calendar';
import Jobs from '../../../components/Jobs/Jobs';
import History from '../../../components/History/History';
import Reviews from '../../../components/Reviews/Reviews';
import UpdateMessage from '../../../components/UpdateMessage/UpdateMessage';
import Aux from '../../../hoc/Aux';
import './Caregiver.css';



class Caregiver extends Component {
    render () {
        return (
            <Aux>
                <Bio />
                <Availability />
                <Calendar />
                <Jobs />
                <History />
                <Reviews />
                <Route path="/update-message" component={ UpdateMessage } />
                <div>ha caregiver!</div>
            </Aux>
        )
    }
};

export default Caregiver;
