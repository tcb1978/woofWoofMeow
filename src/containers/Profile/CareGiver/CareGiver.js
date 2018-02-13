import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Walklist from '../../../components/WalkList/WalkList';
import Calendar from '../../../components/Calendar/Calendar';
import UpdateMessage from '../../../components/UpdateMessage/UpdateMessage';


class CareGiver extends Component {
    render () {
        return (
            <div>
                <Walklist />
                <Calendar />
                <Route path="/update-message" component={ UpdateMessage }/>
            </div>
        )
    }
};

export default CareGiver;