import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './History.css';
import axios from 'axios';
import { connect } from 'react-redux';

import Job from './Job/Job';

class History extends Component {
    constructor () {
        super();
        this.state = {
            jobs: []
        }
    }

    componentDidMount () {
        const { user } = this.props;
        if ( user.title === 'petowner' ) {
            axios.get(`/caregiver/jobs/history`).then( jobs => {
                console.log('History', jobs.data);
                this.setState({ jobs: jobs.data });
            }).catch(error => console.log(error));
        } 
        if ( user.title === 'caregiver' ) {
            axios.get(`/caregiver/jobs/history`).then( jobs => {
                console.log('History', jobs.data);
                this.setState({ jobs: jobs.data });
            }).catch(error => console.log(error));
        }
    }

    render() {
        const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const listOfPastJobs = this.state.jobs.map( job => (
            <Job key={job.job_id}
                 job={job}
                 months={months}
                 days={days} />
        ));
        
        return (
            <Aux>
                <div className="HistoryContainer">
                    <h1>History</h1>
                    <div className="HistoryDropDown">

                            { listOfPastJobs.length ? listOfPastJobs : <div>No Appointments</div> }

                    </div>
                </div>
            </Aux>
        )
    }
};

export default connect( state => state )( History );