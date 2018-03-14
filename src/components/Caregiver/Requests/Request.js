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
            jobs: [],
            isHidden: true
        }
    }
    componentDidMount() {
        axios.all([
            axios.get(`/caregiver/jobs/requested`),
            axios.get(`/caregiver/jobs/accepted`),
            axios.get(`/caregiver/jobs`)
        ]).then( axios.spread( (requestsRes, interestedRes, jobsRes) => {

            this.setState({ 
                requests: requestsRes.data, 
                interested: interestedRes.data,
                jobs: jobsRes.data
            });

        })).catch( err => console.log(err) );
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    onHandleInterest = (job_id) => {
        axios.put(`/update/job/${job_id}`, { request_status: 't' }).then( () => {

            axios.all([
                axios.get(`/caregiver/jobs/requested`),
                axios.get(`/caregiver/jobs/accepted`),
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

    

    render() {

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

        const Requests = () => (<div>{listOfRequests.length ? listOfRequests : <div style={{ margin: 'auto', display: 'flex' }}>No requests</div>}</div>)

        return (
            <Aux>
                <div className="Requests" onClick={this.toggleHidden.bind(this)}>
                    <h1>Requests</h1>
                    <div className="request-row-box">
                        {!this.state.isHidden && <Requests />}
                    </div>
                </div>
            </Aux>
        )
    }
};

export default connect(state => state)(Requests);