import React, { Component } from 'react';
import Bio from '../../../components/Bio/Bio';
import Request from '../../../components/Caregiver/Requests/Request';
import Availability from '../../../components/Caregiver/Availability/Availability';
import Calendar from '../../../components/Caregiver/Calendar/Calendar';
import Jobs from '../../../components/Jobs/Jobs';
import History from '../../../components/History/History';
import Reviews from '../../../components/Reviews/Reviews';
import Aux from '../../../hoc/Aux';

class Caregiver extends Component {
    render () {
        return (
            <Aux>
                <Bio logout={ this.props.logout }/>
                <Request />
                <Availability />
                <Calendar />
                <Jobs />
                <History />
                <Reviews />
            </Aux>
        )
    }
};

export default Caregiver;
