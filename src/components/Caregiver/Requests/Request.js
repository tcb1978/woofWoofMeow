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
            axios.get(`/petowners/jobs/requested/${1}`),
            axios.get(`/petowners/jobs/interested/${1}`),
            axios.get(`/caregiver/jobs/${1}`)
        ]).then( axios.spread( (requestsRes, interestedRes, jobsRes) => {

            // console.log('Requests', requestsRes.data);
            console.log('Interested', interestedRes.data);
            // console.log('Jobs', jobsRes.data);
            this.setState({ 
                requests: requestsRes.data, 
                interested: interestedRes.data,
                jobs: jobsRes.data
            });

        })).catch( err => console.log(err) );
    }

    onHandleInterest = (id) => {
        let { service, proximity, time, month, day, job_id } = this.props;
        console.log(job_id, 'Here motherfuckers!!!');
        axios.put(`/update/job/${id}`, {
            request_status: 't',
            job_id : job_id
        }).catch(error => console.log(error))
    }

    cancelInterested = (id, user_id) => {
        // console.log('cancel interested');
        axios.delete(`/delete/job/${id}`)
            .then(response => {
                axios.get(`/caregiver/jobs/${user_id}`).then(requests => {
                    this.setState({ requests: requests.data })
                })
            }).catch(error => console.log(error))
    }

    render() {
        // console.log('State -> Requests', this.state.requests);
        // console.log('State -> Interested', this.state.interested);
        // console.log('State -> Jobs', this.state.jobs);

        // The list of requested job
        const listOfRequests = this.state.requests.map( job => (
            <div key={job.user_id} className="ClientRow">
                <div>
                    <div className="client-avatar"><img src={job.avatar} alt="Avatar"/></div>
                    <div className="client-name">{job.first_name}</div>
                </div>
                <div className="request-info">{job.day}/{job.month}/{job.year} {job.begin_time}-{job.end_time}</div>
                <div>
                    <button className="btn btn-primary interest" onClick={() => this.onHandleInterest(job.job_id)}>Interest</button>
                    <button className="btn btn-primary pass">Pass</button>
                </div>
            </div>
        ));

        // The list interested jobs
        const listOfInterested = this.state.interested.map( job => (
            <div key={job.job_id} className="interested">
                <div className="caregiverRow">
                    <div>
                        <div className="caregiver-avatar"><img src={job.avatar} alt="Avatar"/></div>
                        <div className="caregiver-name">{job.first_name}</div>
                    </div>
                    <div>
                        <button onClick={() => this.cancelInterested(job.job_id, job.caregiver_id)} className="btn cancel">Cancel</button>
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