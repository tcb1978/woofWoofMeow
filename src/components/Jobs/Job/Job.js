import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Job.css';
import paw from '../../../assets/img/icon-paw.png';
import axios from 'axios';
import Iframe from 'react-iframe';
import { connect } from 'react-redux';
import UpdateMessage from '../../UpdateMessage/UpdateMessage';
import Payment from '../../Payment/Payment';
import Chat from '../../Chat/Chat'

class Job extends Component {
    constructor () {
        super();
        this.state = { 
            animals: [],
            checkinTime: '',
            checkoutTime: '',
            cancelMessage: '',
            isCheckedin: false,
            isHidden: false,
            isCancelling: false,
            isMessaging: false,
            showUpdatePopup: false
        }
    }
    componentDidMount () {
        if ( this.props.user.title === 'caregiver' ) {
            axios.get(`/animal/${this.props.job.petowner_id}`).then( animals => {
                this.setState({ animals: animals.data });
            }).catch(error => console.log(error));
        }
    }

    handleChange ( property, value ) {
        this.setState({ [property]: value });
    }

    showDetails () {
        this.setState(prevState => ({ isHidden: !prevState.isHidden }));
    }

    showChat () {
        this.setState(prevState => ({ isMessaging: !prevState.isMessaging }));
    }

    checkinCheckout () {
        // Sending a body is unnecessary. The time updates on the backend.
        if ( !this.state.isCheckedIn ) {
            axios.put(`/caregiver/jobs/${this.props.job.job_id}/checkin`)
            .then( time => {
                this.setState(prevState => ({ 
                    isCheckedIn: !prevState.isCheckedIn,
                    checkinTime: time.data[0].checkin_time
                }));
            }).catch(error => console.log(error));
        } else {
            axios.put(`/caregiver/jobs/${this.props.job.job_id}/checkout`)
            .then( time => {
                this.setState(prevState => ({ 
                    isCheckedIn: !prevState.isCheckedIn,
                    checkoutTime: time.data[0].checkout_time,
                    showUpdatePopup: !prevState.showUpdatePopup
                }));
                // this.props.history.push('/update');
            }).catch(error => console.log(error));
        }
    }

    toggleCancel () {
        this.setState(prevState => ({ isCancelling: !prevState.isCancelling }));
    }

    render() {
        const { user, job, months, days, removeJob } = this.props;
        const { animals, checkinTime, checkoutTime, isCheckedIn, cancelMessage, isHidden, isCancelling, isMessaging, showUpdatePopup } = this.state;

        return (
            <Aux>
                <li className="job">
                    { user.title === 'petowner' ? (
                        <div className="job-tab-petowner">
                            <div className="AvatarName">
                                <div className="avatar"><img src={job.avatar} alt="avatar"/></div>
                                <div className="name">{ job.first_name }</div>
                            </div>
                            <div className="date" onClick={() => this.showDetails()}>{ months[job.month] } { job.day }</div>
                            <div><button className="btn message" onClick={() => this.showChat()}>Message</button></div>
                        </div>
                    ) : (
                        <div className="job-tab-caregiver">
                            <img className="paw" src={ paw } alt="paw"/>
                            <div className="date" onClick={() => this.showDetails()}>{ months[job.month] } { job.day }</div>
                            <div className="time">{job.begin_time} - {job.end_time}</div>
                            <div classname="btn-container">
                                { !checkoutTime ?
                                    !isCheckedIn
                                    ? <button className="btn" onClick={ () => this.checkinCheckout() }>Check In</button>
                                    : <button className="btn" onClick={ () => this.checkinCheckout() }>Check out</button>
                                  : <button className="gray-btn">Done</button>
                                }
                            </div>
                        </div>
                    ) }
                    

                    { user.title === 'petowner' ? (
                        isHidden &&
                        <div className="details-petowner">
                            <h3>{ days[job.day % 7] }</h3>
                            <div className="StartFinish">
                                <div className="start">Start : <time>{ checkinTime ? checkinTime : '-' }</time></div>
                                <div className="finish">Finish : <time>{ checkoutTime ? checkinTime : '-'  }</time></div>
                            </div>
                            <div className="GoogleMap">
                                <div className="map">
                                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.976408627208!2d-112.07693238499344!3d33.449921156677355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b1223cc3206f9%3A0xb5ea49903b4b21d3!2sUS+Bank+Tower%2C+101+N+1st+Ave%2C+Phoenix%2C+AZ+85003!5e0!3m2!1sen!2sus!4v1519326392838"
                                        position="absolute"
                                        width="100%"
                                        height="100%"
                                        id="myId"
                                        className="myClassname"
                                        styles={{ width: "390px", height: "390px" }}
                                        allowFullScreen />
                                </div>
                            </div>
                            { !job.checkin_time && 
                            <div className="Cancel">
                                <button className="cancel-btn btn" onClick={ () => this.toggleCancel() }>Cancel</button>
                            </div> }
                        </div>
                    ) : (
                        isHidden &&
                        <div className="details-caregiver">
                            <div className="StartFinish">
                                <div className="start">Start : <time>{ checkinTime ? checkinTime : '-' }</time></div>
                                <div className="finish">Finish : <time>{ checkoutTime ? checkinTime : '-' }</time></div>
                            </div>

                            <div className="AvatarDisplay">
                                { animals && animals.map( animal => (
                                <div key={animal.animal_id}>
                                    <div className="AnimalAvatar"><img src={ animal.animal_avatar } alt="avatar"/></div>
                                    <div className="AnimalName">{ animal.animal_name }</div>
                                </div>
                                ))}
                            </div>

                            <div className="TodaysService">
                                <div className="ServiceLength">{ job.service.slice(0,6) } </div>
                                <div className="WalkOrPark"> { job.service.slice(10, job.service.length) }</div>
                            </div>

                            <div className="AddressContact">
                                <div className="Address">
                                    <div>Address</div>
                                    { job.street_address }
                                </div>
                                <div className="OwnerPhone">
                                    <div>Owners's Phone</div>
                                    { job.phone }
                                </div>
                            </div>

                            { !isCancelling ? (
                            <div className="Cancel">
                                <button className="cancel-btn btn" onClick={ () => this.toggleCancel() }>Cancel</button>
                            </div>
                            ) : (
                            <div className="Cancel">
                                <textarea className="cancel-text" name="message" rows="2" cols="80" placeholder="Cancel message..." onChange={(e) => this.handleChange('cancelMessage', e)}></textarea>
                                <button className="cancel-btn btn" onClick={ () => cancelMessage.length ? removeJob(job.job_id) : null }>Confirm</button>
                                <button className="cancel-btn btn" onClick={ () => this.toggleCancel() }>Take back</button>
                            </div>
                            ) }
                        </div>
                    ) }

                    { isMessaging && <Chat /> }
                </li>
                { showUpdatePopup && <UpdateMessage job={job} />}
            </Aux>
        )
    }
};

export default connect(state => state)(Job);