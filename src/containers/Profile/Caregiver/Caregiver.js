import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Bio from '../../../components/Bio/Bio';
import Request from '../../../components/Caregiver/Requests/Request';
import Interested from '../../../components/Caregiver/Interested/Interested';
import Availability from '../../../components/Caregiver/Availability/Availability';
import Calendar from '../../../components/Caregiver/Calendar/Calendar';
import Jobs from '../../../components/Caregiver/Jobs/Jobs';
import History from '../../../components/History/History';
import Reviews from '../../../components/Caregiver/Reviews/Reviews';
import UpdateMessage from '../../../components/UpdateMessage/UpdateMessage';
import Aux from '../../../hoc/Aux';
import './Caregiver.css';



class Caregiver extends Component {
    render () {
        return (
            <Aux>
                <Bio />
                <Request />
                <Availability />
                <Calendar />
                <Jobs />
                <History />
                <Reviews />
                <Route path="/update-message" component={ UpdateMessage } />
            </Aux>
        )
    }
};

export default Caregiver;
