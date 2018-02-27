import React, { Component } from 'react';
import UserUploader from '../../Uploader/UserUploader';
import Aux from '../../../hoc/Aux';
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
        // axios.get('/')
    }

    handleChange(property, event) {
        event.preventDefault();
        this.setState({ [property]: event.target.value });
    }

    handleSubmit() {
        const { street_address, state, city, zip, email, phone, about_message, proximity } = this.state;
        const avatar = this.props.userUrl;

        if (this.props.user.title === 'caregiver') {
            axios.put('/update/profile', {
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
                .then(response => {
                    console.log(response);
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
                    console.log(response);
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
                <div className='popup_inner'>
                
                    <div className="pop-elements"><label>Street Address:</label><input className="form-control" type="text" onChange={(event) => this.handleChange("street_address", event)} placeholder="Street Address" /></div>

                    <div className="pop-elements"><label>City:</label><input className="form-control" type="text" onChange={(event) => this.handleChange("city", event)} placeholder="City" /></div>

                    <div className="pop-elements"><label>State:</label><select className="form-control" name="State" value={this.state.state} onChange={(event) => this.handleChange("state", event)}>{stateOptions}</select></div>

                    <div className="pop-elements"><label>Zip:</label><input className="form-control" type="text" onChange={(event) => this.handleChange("zip", event)} placeholder="Zip" /></div>

                    <div className="pop-elements"><label>Phone:</label><input className="form-control" type="text" onChange={(event) => this.handleChange("phone", event)} placeholder="Phone" /></div>

                    <div className="pop-elements"><label>Email:</label><input className="form-control" type="text" onChange={(event) => this.handleChange("email", event)} placeholder="Email" /></div>
                    <textarea className="pop-elements" name="Text1" cols="40" rows="5" type="text" onChange={(event) => this.handleChange("about_message", event)} placeholder="Include a description about yourself. Consider what makes you trustworthy to enter peoples homes and provide animal care. What previous experience do you have? Sell yourself!!" />
                    <UserUploader />

                    {this.props.user.title === 'caregiver'
                        ? (
                            <dib>
                                <div>
                                    How many miles proximity from your home would you like to work? Consider commute times. Can you arrive in a reasonable window according to your appointments? Each appointment allows for a 60 minute window before and after the suggested scheduling time.
                                    <select
                                        className="pop-elements"
                                        type="text"
                                        onChange={(event) => this.handleChange("proximity", event)}>
                                        <option value="3 miles">3 miles</option>
                                        <option value="5 miles">5 miles</option>
                                        <option value="7 miles">7 miles</option>
                                    </select>
                                </div>
                            </dib>
                        ) : (
                            <div></div>
                        )}

                    <input className="form-control btn btn-primary submit-button" type="submit" value="Submit" />
                    
                    <button onClick={this.props.closePopup}><i class="fas fa-times-circle"></i></button>
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