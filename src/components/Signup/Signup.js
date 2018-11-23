import React, { Component } from 'react';
import './Signup.css';
import Aux from '../../hoc/Aux';
import axios from 'axios';
import { register } from '../../redux/ducks/reducer';
import { connect } from 'react-redux';

import UserUploader from '../Uploader/UserUploader';
import AnimalUploader from '../Uploader/AnimalUploader';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            street_address: '',
            state: 'Alabama',
            city: '',
            zip: '',
            email: '',
            phone: '',
            avatar: '',
            url: '',
            title: '',
            password: '',
            passwordCheck: '',
            longitude: '',
            latitude: '',
            about_message: '',
            proximity: '3',
            animal_name: '',
            breed: '',
            age: '',
            weight: '',
            sex: 'Male',
            animal_avatar: '',
            animal_about_message: ''
        };
    }

    // when the page loads we put in the users table a record with all
    // fields empty except the title of user("caregiver" or "petowner")
    //
    // when get the response we make default ("6AM - 2PM") availability for the caregiver
    componentDidMount() {
        const url = this.props.match.url
        const title = url.split('/')
        this.setState({ title: title[2] });

        // initial post to the database with user title only
        axios.post('/register', {
            title: title[2]
        }).then(user => {
            // updates user in redux
            this.props.register(user.data);

            this.setState({ user_id: user.data.user_id });

            // if the user title is caregiver, default availability data is created
            if (user.data.title === 'caregiver') {
                // making default values for the availability
                const time_range = "6AM - 2PM";
                const begin_time = 6;
                const end_time = 14;
                // making availability for 7 days for one user
                for (let i = 0; i < 7; i++) {
                    axios.post('/create/available', {
                        user_id: user.data.user_id,
                        day: i,
                        time_range: time_range,
                        begin_time: begin_time,
                        end_time: end_time
                    }).then(available => {
                        console.log('Available ', available);
                    }).catch(error => console.log(error))
                }
            }
        }).catch(error => console.log(error));
    }

    // here we are sending the actual user data to update the user record in the database
    handleSubmit(event) {
        event.preventDefault();

        let { first_name, last_name, street_address, state, city, zip, email, phone, avatar, title, password, passwordCheck, longitude, latitude, about_message, proximity, animal_name, breed, age, weight, sex, animal_avatar, animal_about_message } = this.state;

        const { userUrl } = this.props;
        const { animalUrl } = this.props;

        avatar = userUrl;
        animal_avatar = animalUrl;

        if (password !== passwordCheck) {
            alert('Passwords Do Not Match!!')
        } else {
            axios.put('/update/user', {
                first_name,
                last_name,
                street_address,
                state,
                city,
                zip, // think about zip code restrictions (501 <= zip <= 99950)
                email,
                phone,
                avatar,
                title,
                password,
                longitude,
                latitude,
                about_message: !about_message ? null : about_message,
                proximity
            }).then(user => {

                // If the user is petowner, an animal is created in the animal table with the input data
                if (user.data.title === 'petowner') {
                    axios.post('/create/animal', {
                        animal_name, breed, age, weight, sex, animal_avatar, animal_about_message
                    }).then(animal => {
                        // console.log(animal);
                    }).catch(error => console.log(error))
                }
                this.props.history.push('/profile');

            }).catch(error => console.log(error));
        }
    }

    handleChange(property, event) {
        event.preventDefault();
        this.setState({ [property]: event.target.value });
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
            <Aux>
                <div className="background">
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <div className="form-container">
                            <h1>Personal Information</h1>
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <div className="form-group">
                                        First Name:<input className="form-control" type="text" onChange={(event) => this.handleChange("first_name", event)} placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <div className="form-group">
                                        Last Name:<input className="form-control" type="text" onChange={(event) => this.handleChange("last_name", event)} placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <div className="form-group">
                                        Street Address:<input className="form-control" type="text" onChange={(event) => this.handleChange("street_address", event)} placeholder="Street Address" />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <div className="form-group">
                                        City:<input className="form-control" type="text" onChange={(event) => this.handleChange("city", event)} placeholder="City" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <div className="form-group">
                                        State:
                                        {/* <input className="form-control" type="text" onChange={(event) => this.handleChange("state", event)} placeholder="State"/> */}
                                        <select className="form-control" name="State" value={this.state.state} onChange={(event) => this.handleChange("state", event)}>
                                            {stateOptions}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <div className="form-group">
                                        Zip:<input className="form-control" type="text" onChange={(event) => this.handleChange("zip", event)} placeholder="Zip" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <div className="form-group">
                                        Phone:<input className="form-control" type="text" onChange={(event) => this.handleChange("phone", event)} placeholder="Phone" />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <div className="form-group">
                                        Email:<input className="form-control" type="text" onChange={(event) => this.handleChange("email", event)} placeholder="Email" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <div className="form-group">
                                        Create Password:<input className="form-control" type="password" required onChange={(event) => this.handleChange("password", event)} placeholder="Create Password" />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <div className="form-group">
                                        Confirm Password:<input className="form-control" type="password" required onChange={(event) => this.handleChange("passwordCheck", event)} placeholder="Confirm Password" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <div className="form-group">
                                        {/*Image:<input type="text" className="form-control" onChange={(event) => this.handleChange("avatar", event)} placeholder="Include an image link of yourself with your furry friend!!" />*/}
                                        <UserUploader />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {this.props.user.title === 'petowner'
                            ? (
                                <div className="form-container">
                                    <h1>Animal</h1>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6">
                                            <div className="form-group">
                                                Animal Name:<input className="form-control" type="text" placeholder="name" onChange={(event) => this.handleChange("animal_name", event)} />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6">
                                            <div className="form-group">
                                                Breed:<input className="form-control" type="text" placeholder="breed" onChange={(event) => this.handleChange("breed", event)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6">
                                            <div className="form-group">
                                                Age:<input className="form-control" type="text" placeholder="age" onChange={(event) => this.handleChange("age", event)} />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6">
                                            <div className="form-group">
                                                Weight:<input className="form-control" type="text" placeholder="weight" onChange={(event) => this.handleChange("weight", event)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6">
                                            <div className="form-group">
                                                Sex:
                                                <select className="form-control" name="Sex" value={this.state.sex} onChange={(event) => this.handleChange("sex", event)}>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6">
                                            {/*Image:<input type="text" className="form-control" onChange={(event) => this.handleChange("animal_avatar", event)} placeholder="Include an image link of your furry friend!!" />*/}
                                            <AnimalUploader />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <div className="form-group">
                                                Include a description of your animal.
                                                <textarea className="form-control" name="Text1" cols="40" rows="5" type="text" placeholder="About your animal" onChange={(event) => this.handleChange("animal_about_message", event)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="form-container" >
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6" >
                                            <div className="form-group">
                                                How many miles proximity from your home would you like to work? Consider commute times. Can you arrive in a reasonable window according to your appointments? Each appointment allows for a 60 minute window before and after the suggested scheduling time.
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6">
                                            <div className="form-group">
                                                <select
                                                    className="form-control"
                                                    type="text"
                                                    onChange={(event) => this.handleChange("proximity", event)}>
                                                    <option value="3 miles">3 miles</option>
                                                    <option value="5 miles">5 miles</option>
                                                    <option value="7 miles">7 miles</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <div className="form-group">
                                                <textarea className="form-control" name="Text1" cols="40" rows="5" type="text" onChange={(event) => this.handleChange("about_message", event)} placeholder="Include a description about yourself. Consider what makes you trustworthy to enter peoples homes and provide animal care. What previous experience do you have? Sell yourself!!" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        <input className="form-control btn btn-primary submit-button" type="submit" value="Submit" />
                    </form>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        userUrl: state.userUrl,
        animalUrl: state.animalUrl
    };
};

const mapDispatchToProps = {
    register: register
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);