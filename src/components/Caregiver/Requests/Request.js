import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Request.css';
import axios from 'axios';

class Requests extends Component {
    constructor() {
        super();
        this.state = {
            requests: [],
            interested: [],
            jobs: []
        }
    }
    componentDidMount() {
        axios.all([
            axios.get(`/caregiver/jobs/requested`),
            axios.get(`/caregiver/jobs/interested`),
            axios.get(`/caregiver/jobs/`)
        ]).then( axios.spread( (requestsRes, interestedRes, jobsRes) => {

            console.log('Requests', requestsRes.data);
            console.log('Interested', interestedRes.data);
            console.log('Jobs', jobsRes.data);
            this.setState({ 
                requests: requestsRes.data, 
                interested: interestedRes.data,
                jobs: jobsRes.data
            });

        })).catch( err => console.log(err) );
    }

    render() {
        console.log('State -> Requests', this.state.requests);
        console.log('State -> Interested', this.state.interested);
        console.log('State -> Jobs', this.state.jobs);

        // The list of requested job
        const listOfRequests = this.state.requests.map( job => (
            <div key={job.job_id} className="ClientRow">
                <div>
                    <div className="client-avatar"><img src={job.avatar} alt="Avatar"/></div>
                    <div className="client-name">{job.first_name}</div>
                </div>
                <div className="request-info">{job.day}/{job.month}/{job.year} {job.begin_time}-{job.end}</div>
                <div>
                    <button className="btn btn-primary interest">Interest</button>
                    <button className="btn btn-primary pass">Pass</button>
                </div>
            </div>
        ));

        // The list interested jobs
        const listOfInterested = this.state.requests.map( job => (
            <div key={job.job_id} className="">
                <div className="caregiverRow">
                    <div>
                        <div className="caregiver-avatar"><img src={job.avatar} alt="Avatar"/></div>
                        <div className="caregiver-name">{job.first_name}</div>
                    </div>
                    <div>
                        <button className="btn btn-primary cancel">Cancel</button>
                    </div>
                </div>
            </div>
        ));

        // // The list of jobs ( the )
        // const listOfJobs = this.state.jobs.map( job => (
        //     <div className="">
                
        //     </div>
        // ));

        return (
            <Aux>
                <div className="Requests">
                    <h1>Requests</h1>
                    <div className="request-row-box">
                        { listOfRequests }
                    </div>
                </div>

                <div className="Interested">
                    <h1>Interested</h1>
                    <div className="interested-row-box">
                        { listOfInterested }
                    </div>
                </div>
            </Aux>
        )
    }
};

export default Requests;