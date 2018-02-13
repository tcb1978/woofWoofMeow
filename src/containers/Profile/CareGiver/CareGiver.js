import React, { Component} from 'react';
import {Route} from 'react-router-dom';
import Walklist from '../../../components/WalkList/WalkList';
import Calendar from '../../../components/Calendar/Calendar';
import UpdateMessage from '../../../components/UpdateMessage/UpdateMessage'


class CareGiver extends Component {
    render () {
        return (
            <Aux>
                <Walklist />
                <Calendar />
                <Route path="/Updatemessage" component={UpdateMessage}/>
            </Aux>
        )
    }
};

export default CareGiver;