import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Aux from '../../hoc/Aux';
import axios from 'axios';
import CaregiverInfo from './UserInfo/CaregiverInfo/CaregiverInfo';
import AnimalInfo from './UserInfo/AnimalInfo/AnimalInfo';
import { login } from '../../redux/ducks/reducer';
import { connect } from 'react-redux';

class Signup extends Component {
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
            title: '',
            longitude: '',
            latitude: ''
        };
    }

    componentDidMount() {
        axios.post('/register', {
            title: 'caregiver'
        })
        .then(response => {
            console.log(response);
            console.log(this.props);
            this.props.login(response.data[0])
            console.log(this.props);
        })
        .catch(error => {
            console.log(error);
        })
    }

    // handleSubmit = (event) =>  {
    //     event.preventDefault();
    //     const { name, breed, age, weight, sex, user_id } = this.state;
    //     axios.post('/animal', {
    //         name, breed, age, weight, sex, user_id
    //     })
    //     .then( //request => {console.log(request)}
    //         this.setState({
    //             fireRedirect: true
    //         })
    //     )
    //     .catch((error) => (console.log(error)))
    // }

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

                    { this.props.user.title === 'petowner'
                    ? <AnimalInfo />
                    : <CaregiverInfo/>}

                    <label className="form-group">
                        <input className="form-control btn btn-primary mb-2"  type="submit" value="Submit"  />
                    </label>
                </form>
                
                {fireRedirect && (
                    <Redirect to={'/'} />
                )}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
      user: state.user,
    //   title: state.title
    };
  };
  
  const mapDispatchToProps = {
    login: login
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Signup);