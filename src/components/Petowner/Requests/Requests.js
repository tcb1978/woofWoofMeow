import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Requests.css';
import History from '../../History/History';
import Jobs from '../../../components/Petowner/Jobs/Jobs';
import axios from 'axios';

class Requests extends Component {
    constructor () {
        super();
        this.state = {
            caregivers: [],
            requests: [],
            interested: [],
            jobs: []
        }
    }

    componentDidMount() {
        // Gets all the petowner's requested jobs ( gets all jobs with request value false)
        axios.get(`/caregivers/jobs/requested`).then(res => {
            this.setState({ requests: res.data });
        }).catch(err => console.log(err));

        axios.get('/caregivers/jobs/interested').then(response => {
            this.setState({ jobs: response.data })
        }).catch(error => console.log(error));
    }

    request = (id) => {
        let { service, proximity, time, month, day } = this.props;
        const caregiver_id = id;
        const petowner_id = 7;
        const begin_time = time;
        const end_time = time;
        month = parseInt(month);
        day = parseInt(day);
        const year = (new Date()).getFullYear();
        const request_status = 'f';

        axios.post('/job', {
            caregiver_id,
            petowner_id,
            month,
            day,
            year,
            begin_time,
            end_time,
            request_status,
            service
        }).then(response => {
            axios.get(`/jobs`).then(jobs => {
                axios.get(`/caregivers/jobs/requested`).then(requests => {
                    this.setState({ requests: requests.data })

                })
            })
        }).catch(error => console.log(error))
    }

    cancelRequest = (id, user_id) => {
        axios.delete(`/delete/job/${id}`)
        .then(response => {
            axios.get(`/petowner/jobs/${user_id}`).then( requests => {
                this.setState({ requests: requests.data })
            })
        }).catch(error => console.log(error))
    }
    
    render () {
        // List of filtered caregivers
        const listOfCaregivers = this.props.caregivers.map(person => (
            <div key={person.id} className="caregiver-row top-bottom">
                <div className="avatar"><img src={person.avatar}/></div>
                <div className="caregiver">{person.first_name}</div>
                <div className="space-around">
                    <button className="btn btn-request btn-primary" onClick={() => this.request(person.user_id)}>Request</button>
                </div>
            </div>
        ));
        // List of caregivers requests
        const listOfRequests = this.state.requests.length ? this.state.requests.map((job) => (
                <div key={job.job_id} className="status-row">
                    <div className="avatar"><img src={job.avatar} /></div>
                    <div className="name">{job.first_name}</div>
                    <div className="date">
                        <date>{job.month}/{job.day}/{job.year}</date>
                    </div>
                    <div className="space-around">
                        <button onClick={() => this.cancelRequest(job.job_id, job.petowner_id)} className="btn cancel">Cancel</button>
                    </div>
                </div>
            )) : '' ;

        // List of interested caregivers
        const listOfInterested = this.state.jobs.map((job) => (
            <div className="status-row">
                <div className="avatar"><img src={job.avatar} /></div>
                <div className="name">{job.first_name}</div>
                <div className="date">
                    <date>{job.month}/{job.day}/{job.year}</date>
                </div>
                <div className="space-around">
                    <button className="btn message">Message</button>
                </div>
            </div>
        ));
        return (
            <Aux>
                <div className="StatusContainer">
                    <div className="CaregiversContainer">
                        { listOfCaregivers }
                    </div>

                    <div className="RequestsContainer">
                        <h1>Requests</h1>
                        { listOfRequests }
                    </div>

                    <div className="InterestedContainer">
                        <h1>Interested</h1>
                        { listOfInterested }
                    </div>

                    <Jobs />

                    <div className="HistoryContainer">
                        <h1>History</h1>
                        <div className="history-wrapper">
                            <div className="status-row">
                                <div className="avatar"></div>
                                <div className="name">Mark</div>
                                <div className="date">
                                    <date>January 10</date>
                                </div>
                                <div className="StartFinish">
                                    <div className="Start"><time className="">1:28pm- </time></div>
                                    <div className="Finish"><time className="">     2:28pm</time></div>
                                </div>
                            </div>
                            <div className="HistoryDropDown">
                                <div className="AvatarDisplay">
                                    <div className="AnimalAvatar"><span>Dog's Name</span></div>
                                    <div className="AnimalAvatar"><span>Dog's Name</span></div>
                                    <div className="AnimalAvatar"><span>Dog's Name</span></div>
                                </div>
                                <div className="TodaysService">
                                    <div className="ServiceLength">30 min </div>
                                    <div className="WalkOrPark">   walk</div>
                                </div>
                            </div>
                            <div className="status-row">
                                <div className="avatar"></div>
                                <div className="name">Mark</div>
                                <div className="date">
                                    <date>January 10</date>
                                </div>
                                <div className="StartFinish">
                                    <div className="Start"><time className="">1:28pm- </time></div>
                                    <div className="Finish"><time className="">     2:28pm</time></div>
                                </div>
                            </div>
                            <div className="status-row">
                                <div className="avatar"></div>
                                <div className="name">Mark</div>
                                <div className="date">
                                    <date>January 10</date>
                                </div>
                                <div className="StartFinish">
                                    <div className="Start"><time className="">1:28pm- </time></div>
                                    <div className="Finish"><time className="">     2:28pm</time></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="all-rights-reserved"><span>&copy; All rights reserved.</span></div>
                </div>
            </Aux>
        )
    }
}

export default Requests