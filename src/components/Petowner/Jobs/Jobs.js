import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Jobs.css';
import axios from 'axios';
import Iframe from 'react-iframe';
import { connect } from 'react-redux';

import Job from './Job/Job';

class Jobs extends Component {
    constructor () {
        super();
        this.state = { 
            jobs: []
         }
    }

    componentDidMount () {
        const { user } = this.props;
        if ( user.title = 'petowner' ) {
            axios.get(`/petowner/jobs/interested`).then( jobs => {
                this.setState({ jobs: jobs.data });
            }).catch(error => console.log(error));
        } else {
            axios.get(`/caregiver/jobs/interested`).then( jobs => {
                this.setState({ jobs: jobs.data });
            }).catch(error => console.log(error));
        }
    }

    showChat () {

    }

    render() {
        const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const listOfJobs = this.state.jobs.map( job => {
            return <Job key={ job.job_id }
                        job={ job }
                        months={ months }
                        days={ days } />
        })

        return (
            <Aux>
                <div className="Jobs">
                    <div className="jobs-container">
                    
                        <h1>Jobs</h1>
                        <ul className="job-list">

                            { listOfJobs.length ? listOfJobs : <div>No Appointments</div> }

                        </ul>

                    </div>
                </div>
            </Aux>
        )
    }
};

export default connect(state => state)(Jobs);