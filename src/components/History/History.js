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
            jobs: [],
            isHidden: true
        }
    }

    componentDidMount () {
        const { user } = this.props;
        if ( user.title === 'petowner' ) {
            axios.get(`/petowner/jobs/history`).then( jobs => {
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

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
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

        const History = () => (<div>{listOfPastJobs.length ? listOfPastJobs : <div>No Appointments</div>}</div>)
        
        return (
            <Aux>
                <div className="HistoryContainer" onClick={this.toggleHidden.bind(this)} >
                    <h1>History</h1>
                    <div className="HistoryDropDown">
                        {!this.state.isHidden && <History />}
                    </div>
                </div>
            </Aux>
        )
    }
};

export default connect( state => state )( History );