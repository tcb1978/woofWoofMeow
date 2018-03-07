import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Requests.css';
import axios from 'axios';
import { connect } from 'react-redux';

// import History from '../../History/History';
// import Jobs from '../../../components/Petowner/Jobs/Jobs';

class Requests extends Component {
    constructor () {
        super();
        this.state = {
            caregivers: [],
            requests: [],
            interested: [],
            jobs: [],
            isHidden : true
        }
    }

    componentDidMount() {
        // Gets all the petowner's requested jobs ( gets all jobs with request value false)
        // Gets all the caregivers's interested in jobs ( gets all jobs with request value true )
        axios.all([
            axios.get(`/petowner/jobs/requested`),
            axios.get(`/caregiver/jobs/accepted`)
        ]).then( axios.spread( (requestsRes, interestsRes) => {

            console.log( 'Petowner Interested', interestsRes.data );
            this.setState({
                requests: requestsRes.data,
                interested: interestsRes.data
            });

        })).catch(error => console.log(error));
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    request = (id) => {
        let { service, time, month, day } = this.props;

        axios.post('/create/job', {
            caregiver_id: id,
            petowner_id: this.state.petowner_id,
            month: parseInt(month, 10),
            day: parseInt(day, 10),
            year: (new Date()).getFullYear(),
            begin_time: time,
            end_time: time,
            request_status: 'f',
            service: service
        }).then( job => {
            axios.get(`/petowner/jobs/requested`).then( requests => {
                
                this.setState({ requests: requests.data });

            }).catch(error => console.log(error));
        }).catch(error => console.log(error))
    }

    cancelRequest = (id) => {
        axios.delete(`/delete/job/${id}`).then( () => {
            axios.get(`/petowner/jobs/requested`).then( requests => {
                console.log( requests.data );
                this.setState({ requests: requests.data })
            })
        }).catch(error => console.log(error))
    }
    
    render () {
        // List of filtered caregivers
        const listOfCaregivers = this.props.caregivers.map( person => (
            <div key={person.user_id} className="caregiver-row top-bottom">
                <div className="avatar"><img src={person.avatar} alt="decorative avatar"/></div>
                <div className="caregiver">{person.first_name}</div>
                <div className="space-around">
                    <button className="btn btn-request btn-primary" onClick={() => this.request(person.user_id)}>Request</button>
                </div>
            </div>
        ));

        // List of jobs requests
        const listOfRequests = this.state.requests.map( job => (
            <div key={job.job_id} className="status-row">
                <div className="avatar"><img src={job.avatar} alt="decorative avatar"/></div>
                <div className="name">{job.first_name}</div>
                <div className="date">
                    <date>{job.month}/{job.day}/{job.year}</date>
                </div>
                <div className="space-around">
                    <button onClick={ () => this.cancelRequest(job.job_id) } className="btn">Cancel</button>
                </div>
            </div>
        ));

        const Requests = () => (<div>{listOfRequests.length ? listOfRequests : <div style={{ margin: 'auto' }}>No requests</div>}</div>)

        return (
            <Aux>
                <div className="StatusContainer">
                    <div className="CaregiversContainer">
                        { listOfCaregivers.length ? listOfCaregivers : <div style={{ margin: 'auto', color: 'white' }}>Find caregivers</div> }
                    </div>

                    <div className="RequestsContainer" onClick={this.toggleHidden.bind(this)}>
                        <h1>Requests</h1>
                        {!this.state.isHidden && <Requests />}
                    </div>
                </div>
            </Aux>
        )
    }
}

export default connect(state => state)(Requests);