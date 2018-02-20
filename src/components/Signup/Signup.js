import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Aux from '../../hoc/Aux';
import axios from 'axios';
import { login } from '../../redux/ducks/reducer';
import { connect } from 'react-redux';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fireRedirect: false,
            user_id: '',
            first_name: '',
            last_name: '',
            street_address: '',
            state: '',
            city: '',
            zip: '',
            email: '',
            phone: '',
            avatar: '',
            title: '',
            password: '',
            passwordCheck: '',
            longitude: '',
            latitude: '',
            about_message: '',
            proximity_definition: '3',
            animal_name: '',
            breed: '',
            age: '',
            weight: '',
            sex: ''
        };
    }

    componentDidMount() {
        const str = this.props.match.url
        const arr = str.split('/')
        this.setState({ title: arr[2] })
        axios.post('/register', {
            title: arr[2]
        })
        .then(response => {
            console.log('register user', response);
            // console.log(this.props);
            this.props.login(response.data)
            console.log('props', this.props);
            const user_id = response.data.user_id
            this.setState({ user_id: user_id });
            var day = 1;
            const begin_time = "6:00";
            const end_time = "2:00";
            const am_pm = "am";
            for (let i = 0; i < 7; i++) {
                axios.post('/create/available', {
                    user_id,
                    day: i,
                    begin_time,
                    end_time,
                    am_pm
                })
                .then( res => {
                    console.log('res ', res);
                })
                .catch(error => console.log(error))
            }
        })
        .catch(error => {console.log(error)})
    }

    // handleSubmit = (event) =>  {
    //     event.preventDefault();
    //     const { animal_name, breed, age, weight, sex, user_id } = this.state;
    //     axios.post('/animal', {
    //         animal_name, breed, age, weight, sex, user_id
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
        const { user_id, first_name, last_name, street_address, state, city, zip, email, phone, avatar, title, password, passwordCheck, longitude, latitude, about_message, proximity_definition, animal_name, breed, age, weight, sex } = this.state;

        // console.log(password, passwordCheck);
        if (password !== passwordCheck) {
            alert('Passwords Do Not Match!!')
        } else {
            axios.put('/update/user', {
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
                password,
                longitude,
                latitude,
                about_message,
                proximity_definition,
                user_id
            }).then( response => {
                // this.setState({
                //     fireRedirect: true
                // })
                console.log('user -> ', response);
                if (title === 'petowner') {
                    axios.post('/animal', {
                        animal_name, breed, age, weight, sex, user_id
                    })
                    .then( animal => {
                        console.log(animal);
                    })
                    .catch(error => console.log(error))
                }
            })
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
        const { fireRedirect } = this.state
        return (
            <Aux>
                <form onSubmit={ (event) => this.handleSubmit(event)}>
                    <div className="container">
                        <h1>Personal Information</h1>
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <div className="form-group">
                                    First Name:<input className="form-control" type="text" onChange={(event) => this.handleChange("first_name", event)} />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="form-group">
                                    Last Name:<input className="form-control" type="text" onChange={(event) => this.handleChange("last_name", event)} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <div className="form-group">
                                    Street Address:<input className="form-control" type="text" onChange={(event) => this.handleChange("street_address", event)} />
                                </div>                            
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="form-group">
                                    City:<input className="form-control" type="text" onChange={(event) => this.handleChange("city", event)} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <div className="form-group">
                                    State:<input className="form-control" type="text" onChange={(event) => this.handleChange("state", event)} />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="form-group">
                                    Zip:<input className="form-control" type="text" onChange={(event) => this.handleChange("zip", event)} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <div className="form-group">
                                    Phone:<input className="form-control" type="text" onChange={(event) => this.handleChange("phone", event)} />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="form-group">
                                    Email:<input className="form-control" type="text" onChange={(event) => this.handleChange("email", event)} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <div className="form-group">
                                    Create Password:
                                    <input className="form-control" type="password" required onChange={(event) => this.handleChange("password", event)} />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="form-group">
                                    Confirm Password:
                                    <input className="form-control" type="password" required onChange={(event) => this.handleChange("passwordCheck", event)} />
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    { this.props.user.title === 'petowner'
                    ? (
                    <div className="container">
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
                                    Sex:<input className="form-control" type="text" placeholder="sex" onChange={(event) => this.handleChange("sex", event)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    ) : (
                    <div className="container" >
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <div className="form-group">
                                    Upload an image of yourself. Pictures with your furry friends are best!!
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={(event) => this.handleChange("avatar", event)} />
                            </div>
                            <div className="col-xs-12">
                                <div className="form-group">
                                    Include a description about yourself. Consider what makes you trustworthy to enter peoples homes and provide animal care. What previous experience do you have? Sell yourself!!
                                    <textarea className="form-control" name="Text1" cols="40" rows="5" type="text" placeholder="About Yourself" onChange={(event) => this.handleChange("about_message", event)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12" >
                                <div className="form-group">
                                    How many miles proximity from your home would you like to work? Consider commute times. Can you arrive in a reasonable window according to your appointments? Each appointment allows for a 60 minute window before and after the suggested scheduling time.
                                    <select
                                        className="form-control"
                                        type="text"
                                        placeholder="last name"
                                        onChange={(event) => this.handleChange("proximity_definition", event)}>
                                        <option value="3">3</option>
                                        <option value="5">5</option>
                                        <option value="7">7</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="form-group">
                                    <input className="form-control btn btn-primary mb-2" type="submit" value="Submit" />
                                </div>
                            </div>
                        </div>
                    </div>
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
      user: state.user
    };
  };
  
  const mapDispatchToProps = {
    login: login
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Signup);