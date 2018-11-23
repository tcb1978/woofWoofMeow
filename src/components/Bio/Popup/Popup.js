import React, { Component } from 'react';
import UserUploader from '../../Uploader/UserUploader';
import './Popup.css';
import axios from 'axios';
import { register } from '../../../redux/ducks/reducer';
import { connect } from 'react-redux';

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            street_address: '',
            state: '',
            city: '',
            zip: '',
            email: '',
            phone: '',
            avatar: '',
            about_message: '',
            proximity: ''
        }
    }

    componentDidMount() {
        const { street_address, state, city, zip, email, phone, about_message, proximity } = this.props.user;
        const avatar = this.props.userUrl;
        this.setState({
            street_address,
            state,
            city,
            zip,
            email,
            phone,
            avatar,
            about_message,
            proximity
        })
    }

    handleChange(property, event) {
        event.preventDefault();
        this.setState({ [property]: event.target.value });
    }

    handleSubmit(e) {
        e.preventDefault()
        const { userUrl } = this.props;
        let { street_address, state, city, zip, email, phone, avatar, about_message, proximity } = this.state;

        if (this.props.user.title === 'caregiver') {
            axios.put('/update/profile', {
                street_address,
                state,
                city,
                zip,
                email,
                phone,
                avatar: userUrl.length ? userUrl : avatar,
                about_message,
                proximity
            })
                .then(response => {
                    this.setState({
                        street_address,
                        state,
                        city,
                        zip,
                        email,
                        phone,
                        avatar,
                        about_message,
                        proximity
                    })
                })
                .catch(error => console.log(error))
        } else if (this.props.user.title === 'petowner') {
            axios.put('/update/profile', {
                street_address,
                state,
                city,
                zip,
                email,
                phone,
                avatar,
                about_message
            })
                .then(response => {
                    this.setState({
                        street_address,
                        state,
                        city,
                        zip,
                        email,
                        phone,
                        avatar,
                        about_message
                    })
                })
                .catch(error => console.log(error))
        }

    }

    render() {
        const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
            'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
            'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
            'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
            'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
        ];
        const stateOptions = states.map((state, i) => (
            <option key={i} value={state}>{state}</option>
        ));
        return (
            <form className='popup' onSubmit={(event) => this.handleSubmit(event)}>
                <span onClick={this.props.closePopup}><i class="fas fa-times-circle"></i></span>
                <div className='popup_inner'>
                    <div clasName="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="form-group"><label>Street Address:</label><input className="form-control" type="text" onChange={(event) => this.handleChange("street_address", event)} placeholder="Street Address" value={ this.state.street_address }/></div>

                            <div className="form-group"><label>City:</label><input className="form-control" type="text" onChange={(event) => this.handleChange("city", event)} placeholder="City" value={ this.state.city}/></div>
                        </div>
                    </div>
                    <div clasName="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="form-group"><label>State:</label><select className="form-control" value={this.state.state} onChange={(event) => this.handleChange("state", event)} value={ this.state.state }>{stateOptions}</select></div>

                            <div className="form-group"><label>Zip:</label><input className="form-control" type="text" onChange={(event) => this.handleChange("zip", event)} placeholder="Zip" value={ this.state.zip }/></div>
                        </div>
                    </div>
                    <div clasName="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="form-group"><label>Phone:</label><input className="form-control" type="text" onChange={(event) => this.handleChange("phone", event)} placeholder="Phone" value={ this.state.phone }/></div>
                        </div>
                    </div>
                    <div clasName="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="form-group"><label>Email:</label><input className="form-control" type="text" onChange={(event) => this.handleChange("email", event)} placeholder="Email" value={ this.state.email }/></div>
                        </div>
                    </div>
                    <div clasName="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="form-group"><UserUploader /></div>
                        </div>
                    </div>
                    <div clasName="row">
                        <div className="col-xs-12">
                            <div className="form-group">
                                <textarea className="form-control" type="text" onChange={(event) => this.handleChange("about_message", event)} placeholder="Update description" defaultValue={ this.state.about_message } />
                            </div>
                        </div>
                    </div>

                    {this.props.user.title === 'caregiver'
                        ? (
                            <div clasName="row">
                                <div className="col-xs-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Proximity from home:</label>
                                        <select
                                            className="form-control"
                                            type="text"
                                            value={ this.state.proximity }
                                            onChange={(event) => this.handleChange("proximity", event)}>
                                            <option value="3 miles">3 miles</option>
                                            <option value="5 miles">5 miles</option>
                                            <option value="7 miles">7 miles</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                        </div>
                        )}

                        <div clasName="row">
                            <div className="col-xs-12">
                                <div className="form-group">
                                    <input className="form-control btn btn-primary submit-button" type="submit" value="Submit" />
                                </div>
                            </div>
                        </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        userUrl: state.userUrl,
    };
};

const mapDispatchToProps = {
    register: register
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);