import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Request.css';
import axios from 'axios';

class Requests extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs: [],
            isHidden: true
        }
    }
    componentDidMount() {
        axios.get(`/jobs`).then(response => {
            const { job_id, first_name, last_name, caregiver_id, petowner_id, comments, month, day, year, begin_time, end_time, request_status, service, avatar } = response.data
            console.log(response.data);
            this.setState({
                jobs : response.data
            })
        }).catch(error => console.log(error));
    }

    render() {
        const Child = () => (<div>
            {this.state.jobs.map((job, index) => (
                <div className="ClientRow">
                    <div>
                        <div className="client-avatar"><img src={job.avatar} /></div>
                        <div className="client-name">{job.first_name}</div>
                    </div>
                    <div className="request-info">{job.day}/{job.month}/{job.year} {job.begin_time}-{job.end}</div>
                    <div>
                        <button className="btn btn-primary interest">Interest</button>
                        <button className="btn btn-primary pass">Pass</button>
                    </div>
                </div>
            ))}
        </div>);
        return (
            <Aux>
                <div className="Requests">
                    <h1>Requests</h1>
                    <div className="request-row-box">
                        <Child />
                    </div>
                </div>
            </Aux>
        )
    }
};

export default Requests;