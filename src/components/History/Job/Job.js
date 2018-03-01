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
            isHidden: false
        }
    }
    componentDidMount () {
        if ( this.props.user.title === 'caregiver' ) {
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
                    <div className="Appointment tab">
                        <div className="avatar"></div>
                        <div className="day"><h3>March 24</h3></div>
                        <div className="time"><h3>2:30pm - 3:00pm</h3></div>
                    </div>

                    <div className="AppointmentHistory">
                        <div className="AvatarDisplay">
                            <div className="AnimalAvatar"><span>Dog's Name</span></div>
                            <div className="AnimalAvatar"><span>Dog's Name</span></div>
                            <div className="AnimalAvatar"><span>Dog's Name</span></div>
                        </div>
                        <div className="TodaysService">
                            <div className="ServiceLength">30 min </div>
                            <div className="WalkOrPark"> walk</div>
                        </div>
                        <div className="AddressContact">
                            <div className="Address">
                                <div>Address</div>
                                1234 N. Somekinda Ave.
                                            </div>
                            <div className="OwnerPhone">
                                <div>Owners's Phone</div>
                                555-555-5555
                            </div>
                        </div>
                    </div> 
                </li>
            </Aux>
        )
    }
};

export default connect(state => state)(Job);