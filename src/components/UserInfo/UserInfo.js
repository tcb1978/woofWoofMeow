import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Aux from '../../hoc/Aux';
import axios from 'axios';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fireRedirect: false, 
            first_name: '',
            last_name: '',
            street_address: '',
            state: '',
            city: '',
            zip: '',
            email: '',
            phone: '',
            password: '',
            passwordCheck: '',
            avatar:'',
            longitude: null,
            latitude: null,
            title: 'pet owner'

        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleFirstNameSubmit = this.handleFirstNameSubmit.bind(this);
        // this.handleLastNameSubmit = this.handleLastNameSubmit.bind(this);
        // this.handleStreetAddressSubmit = this.handleStreetAddressSubmit.bind(this);
        // this.handleCitySubmit = this.handleCitySubmit.bind(this);
        // this.handleStateSubmit = this.handleStateSubmit.bind(this);
        // this.handleZipSubmit = this.handleZipSubmit.bind(this);
        // this.handlePhoneSubmit = this.handlePhoneSubmit.bind(this);
        // this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    }

    handleSubmit(event) {

        event.preventDefault();
        const { first_name, last_name, street_address, state, city, zip, email, phone, avatar, title, longitude, latitude, password, passwordCheck} = this.state;
        console.log(password, passwordCheck);
        if (password !== passwordCheck) {
            alert('Passwords Do Not Match!!')
        } else {
            axios.post('/register', {
                first_name,
                last_name,
                street_address,
                state,
                city,
                zip,
                email,
                phone,
                avatar,
                title,
                longitude,
                latitude,
                password
            }).then(
                this.setState({
                    fireRedirect: true
                })
            )
            .catch(
                (error) => (console.log(error))
            )
        }
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ value: event.target.value });
    }

    handleFirstNameSubmit(event) {
        event.preventDefault();
        const first_name = event.target.value;
        this.setState({
            first_name: first_name
        })
    }

    handleLastNameSubmit(event) {
        event.preventDefault();
        const last_name = event.target.value;
        this.setState({
            last_name: last_name
        })
    }

    handleStreetAddressSubmit(event) {
        event.preventDefault();
        const street_address = event.target.value;
        this.setState({
            street_address: street_address
        })
    }

    handleCitySubmit(event) {
        event.preventDefault();
        const city = event.target.value;
        this.setState({
            city: city
        })
    }

    handleStateSubmit(event) {
        event.preventDefault();
        const state = event.target.value;
        this.setState({
            state: state
        })
    }

    handleZipSubmit(event) {
        event.preventDefault();
        const zip = event.target.value
        this.setState({
            zip: zip
        })
    }

    handlePhoneSubmit(event) {
        event.preventDefault();
        const phone = event.target.value
        this.setState({
            phone: phone
        })
    }

    handleEmailSubmit(event) {
        event.preventDefault();
        const email = event.target.value
        console.log(email);
        this.setState({
            email: email
        })
    }

    handlePasswordSubmit = (event) => {
        event.preventDefault();
        this.setState({
            password: event.target.value
        })
    }

    handlePassword = (event) => {
        event.preventDefault();
        this.setState({
            password: event.target.value
        })
        console.log(this.state.password);
    }

    handlePasswordCheck = (event) => {
        event.preventDefault();
        this.setState({
            passwordCheck: event.target.value
        })
        console.log(this.state.passwordCheck);
    }

    handlePasswordValueSubmit(event) {
        event.preventDefault();
        const password = password
        this.setState({
            password: password
        })
    }

    render() {
        // const { from } = this.props.location.state || '/'
        const { fireRedirect } = this.state
        return (
            <Aux>
                <form onSubmit={ (event) => this.handleSubmit(event)}>
                    <div className="form-group">
                        First Name:<input className="form-control" type="text" onChange={(event) => this.handleFirstNameSubmit(event)} />
                    </div>
                    <div className="form-group">
                        Last Name:<input className="form-control" type="text" onChange={ (event) => this.handleLastNameSubmit(event)} />
                    </div>
                    <div className="form-group">
                        Street Address:<input className="form-control" type="text" onChange={ (event) => this.handleStreetAddressSubmit(event)} />
                    </div>
                    <div className="form-group">
                        City:<input className="form-control" type="text" onChange={ (event) => this.handleCitySubmit(event)} />
                    </div>
                    <div className="form-group">
                        State:<input className="form-control" type="text" onChange={ (event) => this.handleStateSubmit(event)} />
                    </div>
                    <div className="form-group">
                        Zip:<input className="form-control" type="text" onChange={ (event) => this.handleZipSubmit(event)} />
                    </div>
                    <div className="form-group">
                        Phone:<input className="form-control" type="text" onChange={ (event) => this.handlePhoneSubmit(event)} />
                    </div>
                    <div className="form-group">
                        Email:<input className="form-control" type="text" onChange={ (event) => this.handleEmailSubmit(event)} />
                    </div>
                    <div className="form-group">
                        Create Password:
                        <input className="form-control"  type="password" required onChange={(event) => this.handlePassword(event)}/>
                    </div>
                    <div className="form-group">
                        Confirm Password:
                        <input className="form-control"  type="password" required onChange={(event) => this.handlePasswordCheck(event)} />
                    </div>
                    <div className="form-group">
                        <input className="form-control btn btn-primary mb-2"  type="submit" value="Submit"  />
                    </div>
                </form>
                {fireRedirect && (
                    <Redirect to={'/'} />
                )}
            </Aux>
        );
    }
}

export default UserInfo;