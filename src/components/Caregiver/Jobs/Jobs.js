import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Jobs.css';
import axios from 'axios';

import Job from './Job/Job';

class Jobs extends Component {
    constructor () {
        super();
        this.state = {
            jobs: []
        }
    }

    componentDidMount () {
        axios.get(`/caregiver/jobs/interested`).then( jobs => {
            console.log( 'Caregiver', jobs );
            this.setState({ jobs: jobs.data });
        }).catch(error => console.log(error));
    }

    render() {
        // const checkin_appointment = (
        //     <div className="Checkin">
        //         <div className="AvatarDisplay">
        //             <div className="AnimalAvatar"><span>Dog's Name</span></div>
        //             <div className="AnimalAvatar"><span>Dog's Name</span></div>
        //             <div className="AnimalAvatar"><span>Dog's Name</span></div>
        //         </div>
        //         <div className="TodaysService">
        //             <div className="ServiceLength">30 min </div>
        //             <div className="WalkOrPark"> walk</div>
        //         </div>
        //         <div className="AddressContact">
        //             <div className="Address">
        //                 <div>Address</div>
        //                 1234 N. Somekinda Ave.
        //             </div>
        //             <div className="OwnerPhone">
        //                 <div>Owners's Phone</div>
        //                 555-555-5555
        //             </div>
        //         </div>
        //         <div className="Cancel">
        //             <form className="form-group">
        //                 <textarea className="cancel-text" name="message" rows="2" cols="80" defaultValue="Cancel message..."></textarea>
        //                 <button className="submit-cancel" >Cancel</button>
        //             </form>
        //         </div>
        //     </div> );

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
                <div className="jobs-caregiver">
                    <div className="jobs-container">
                    
                        <h1>Jobs</h1>
                        <ul className="jobs">

                            { listOfJobs.length ? listOfJobs : <div>No Appointments</div> }

                        </ul>

                    </div>
                </div>
            </Aux>
        )
    }
};

export default Jobs;