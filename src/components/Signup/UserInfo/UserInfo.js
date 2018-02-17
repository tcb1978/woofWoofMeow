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
            title: '',
            longitude: '',
            latitude: '',
            proximity_defenition : 0,
            about_message: '',
            animal_name: '',
            breed: '',
            age: '',
            weight: '',
            sex: ''
        };
    }

    handleSubmit = (event) =>  {
        event.preventDefault();
        const { name, breed, age, weight, sex, user_id } = this.state;
        axios.post('/animal', {
            name, breed, age, weight, sex, user_id
        })
        .then( //request => {console.log(request)}
            this.setState({
                fireRedirect: true
            })
        )
        .catch((error) => (console.log(error)))
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

    handleAvatarUploadSubmit(event) {
        event.preventDefault()
        const avatar = event.target.value
        this.setState({
            avatar: avatar
        })
    }

    handlePersonalDescriptionSubmit(event) {
        event.preventDefault()
        const about_message = event.target.value
        this.setState({
            about_message: about_message
        })
    }

    handleHowManyMilesProximitySubmit(event) {
        event.preventDefault()
        const proximity_defenition = event.target.value
        this.setState({
            proximity_defenition: proximity_defenition
        })
    }

    

    handleChange(property, event) {
        event.preventDefault();
        this.setState({ [property]: event.target.value });
    }

    render() {
        // const { from } = this.props.location.state || '/'
        const { fireRedirect } = this.state
        return (
            <Aux>
                <form onSubmit={ (event) => this.handleSubmit(event)}>
                    <label className="form-group">
                        First Name:<input className="form-control" type="text" onChange={(event) => this.handleChange("first_name", event)} />
                    </label>
                    <label className="form-group">
                        Last Name:<input className="form-control" type="text" onChange={ (event) => this.handleChange("last_name", event)} />
                    </label>
                    <label className="form-group">
                        Street Address:<input className="form-control" type="text" onChange={ (event) => this.handleChange("street_address", event)} />
                    </label>
                    <label className="form-group">
                        City:<input className="form-control" type="text" onChange={ (event) => this.handleChange("city", event)} />
                    </label>
                    <label className="form-group">
                        State:<input className="form-control" type="text" onChange={ (event) => this.handleChange("state", event)} />
                    </label>
                    <label className="form-group">
                        Zip:<input className="form-control" type="text" onChange={ (event) => this.handleChange("zip", event)} />
                    </label>
                    <label className="form-group">
                        Phone:<input className="form-control" type="text" onChange={ (event) => this.handleChange("phone", event)} />
                    </label>
                    <label className="form-group">
                        Email:<input className="form-control" type="text" onChange={ (event) => this.handleChange("email", event)} />
                    </label>
                    <label className="form-group">
                        Create Password:
                        <input className="form-control"  type="password" required onChange={(event) => this.handleChange("password", event)}/>
                    </label>
                    <label className="form-group">
                        Confirm Password:
                        <input className="form-control"  type="password" required onChange={(event) => this.handleChange("passwordCheck", event)} />
                    </label>

                    {/* caregiver */}
                    <label className="form-group">
                        Upload an image of yourself. Pictures with your furry friends are best!!
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={(event) => this.handleAvatarUploadSubmit(event)} />
                    </label>
                    <label className="form-group">
                        Include a description about yourself. Consider what makes you trustworthy to enter peoples homes and provide animal care. What previous experience do you have? Sell yourself!! 
                        <textarea className="form-control" name="Text1" cols="40" rows="5" type="text" placeholder="About Yourself" onChange={(event) => this.handlePersonalDescriptionSubmit(event)} />
                    </label>
                    <label className="form-group">
                        How many miles proximity from your home would you like to work? Consider commute times. Can you arrive in a reasonable window according to your appointments? Each appointment allows for a 60 minute window before and after the suggested scheduling time.
                        <select 
                            className="form-control" 
                            type="text"
                            placeholder="last name"
                            onChange={(event) => this.handleHowManyMilesProximitySubmit(event)}>
                            <option value="3">3</option>
                            <option value="3">5</option>
                            <option value="7">7</option>
                            <option value="10">10</option>
                        </select>
                    </label>

                    {/* animal */}
                    <label className="form-group">
                        Name:<input type="text" placeholder="name" onChange={(event) => this.handleChange("animal_name", event)} />
                    </label>
                    <label className="form-group">
                        Breed:<input type="text" placeholder="breed" onChange={(event) => this.handleChange("breed", event)} />
                    </label>
                    <label className="form-group">
                        Age:<input type="text" placeholder="age" onChange={(event) => this.handleChange("age", event)} />
                    </label>
                    <label className="form-group">
                        Weight:<input type="text" placeholder="weight" onChange={(event) => this.handleChange("weight", event)} />
                    </label>
                    <label className="form-group">
                        Sex:<input type="text" placeholder="sex" onChange={(event) => this.handleChange("sex", event)} />
                    </label>
                    <label className="form-group">
                        <input className="form-control btn btn-primary mb-2"  type="submit" value="Submit"  />
                    </label>
                    
                    <input type="submit" value="Submit"  />
                </form>
                {fireRedirect && (
                    <Redirect to={'/'} />
                )}
            </Aux>
        );
    }
}

export default UserInfo;