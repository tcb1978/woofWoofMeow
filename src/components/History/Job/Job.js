import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Job.css';
import axios from 'axios';
import { connect } from 'react-redux';

class Job extends Component {
    constructor () {
        super();
        this.state = { 
            animals: [],
            isHidden: true
        }
    }
    componentDidMount () {
        const { user } = this.props;
        if ( user.title === 'caregiver' || user.title === 'petowner' ) {
            axios.get(`/animal/${this.props.job.petowner_id}`).then( animals => {
                this.setState({ animals: animals.data });
            }).catch(error => console.log(error));
        }
    }

    showDetails () {
        this.setState(prevState => ({ isHidden: !prevState.isHidden }));
    }

    render() {
        const { user, job, months, days } = this.props;
        const { animals, isHidden } = this.state;
        console.log( user, job );

        return (
            <Aux>
                <li className="job">
                    <div className="job-tab">
                        <div className="AvatarName">
                            <div className="avatar"><img src={job.avatar} alt="avatar"/></div>
                            <div className="name">{ job.first_name }</div>
                        </div>
                        <div className="day" onClick={() => this.showDetails()}><h3>{months[job.month]} {job.day}</h3></div>
                        <div className="time"><h3>{job.begin_time} - {job.end_time}</h3></div>
                    </div>

                    { !isHidden &&
                    <div className="details">
                        <div className="StartFinish">
                            <div className="start">Start : <time>{ job.checkin_time }</time></div>
                            <div className="finish">Finish : <time>{ job.checkout_time }</time></div>
                        </div>

                        <div className="AvatarDisplay">
                            { animals && animals.map( animal => (
                            <div key={animal.animal_id}>
                                <div className="AnimalAvatar"><img src={ animal.animal_avatar } alt="avatar"/></div>
                                <div className="AnimalName">{ animal.animal_name }</div>
                            </div>
                            ))}
                        </div>

                        <div className="Service">
                            <div className="ServiceLength">{ job.service.slice(0,6) } </div>
                            <div className="WalkOrPark"> { job.service.slice(10, job.service.length) }</div>
                        </div>

                        { user.title === 'caregiver' &&
                        <div className="AddressContact">
                            <div className="Address">
                                <div>Address</div>
                                {job.street_address}
                            </div>
                            <div className="OwnerPhone">
                                <div>Owners's Phone</div>
                                {job.phone}
                            </div>
                        </div> }
                    </div> 
                    }
                </li>
            </Aux>
        )
    }
};

export default connect(state => state)(Job);