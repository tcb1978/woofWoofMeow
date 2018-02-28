import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Request.css';
import axios from 'axios';
import { connect } from 'react-redux';

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
            axios.get(`/caregiver/jobs`)
        ]).then( axios.spread( (requestsRes, interestedRes, jobsRes) => {

            this.setState({ 
                requests: requestsRes.data, 
                interested: interestedRes.data,
                jobs: jobsRes.data
            });

        })).catch( err => console.log(err) );
    }

    onHandleInterest = (job_id) => {
        axios.put(`/update/job/${job_id}`, { request_status: 't' }).then( () => {

            axios.all([
                axios.get(`/caregiver/jobs/requested`),
                axios.get(`/caregiver/jobs/interested`),
            ]).then( axios.spread( (requestsRes, interestedRes) => {

                this.setState({ 
                    requests: requestsRes.data, 
                    interested: interestedRes.data
                });
    
            })).catch( err => console.log(err) );

        }).catch(error => console.log(error))
    }

    cancelRequest = (id) => {
        axios.delete(`/delete/job/${id}`).then( () => {
            axios.get(`/caregiver/jobs/requested`).then( requests => {

                this.setState({ requests: requests.data })

            }).catch( err => console.log(err) );
        }).catch(error => console.log(error))
    }

    cancelInterest = (id) => {
        axios.delete(`/delete/job/${id}`).then( () => {
            axios.get(`/caregiver/jobs/interested`).then( interests => {

                this.setState({ interested: interests.data })

            }).catch( err => console.log(err) );
        }).catch(error => console.log(error))
    }

    render() {
        // console.log('State -> Requests', this.state.requests);
        // console.log('State -> Interested', this.state.interested);
        // console.log('State -> Jobs', this.state.jobs);

        // The list of requested job
        const listOfRequests = this.state.requests.map( job => (
            <div key={job.job_id} className="ClientRow">
                <div>
                    <div className="client-avatar"><img src={job.avatar} alt="Avatar"/></div>
                    <div className="client-name">{job.first_name}</div>
                </div>
                <div className="request-info">{job.day}/{job.month}/{job.year} {job.begin_time}-{job.end_time}</div>
                <div>
                    <button className="btn btn-primary interest" onClick={() => this.onHandleInterest(job.job_id, job.petowner_id)}>Interest</button>
                    <button className="btn btn-primary pass" onClick={() => this.cancelRequest(job.job_id)}>Pass</button>
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
                        <button onClick={() => this.cancelInterest(job.job_id)} className="btn cancel">Cancel</button>
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
                        { listOfRequests.length ? listOfRequests : <div style={{ margin: 'auto', display:'flex' }}>No requests</div> }
                    </div>
                </div>

                <div className="Interested">
                    <h1>Interested</h1>
                    <div className="interested-row-box">
                        {listOfInterested.length ? listOfInterested : <div style={{ margin: 'auto', display:'flex'  }}>No interests</div> }
                    </div>
                </div>
            </Aux>
        )
    }
};

export default connect(state => state)(Requests);