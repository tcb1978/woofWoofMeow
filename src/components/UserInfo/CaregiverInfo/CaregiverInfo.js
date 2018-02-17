import React, { Component } from 'react'
import { Redirect } from 'react-router'
import Aux from '../../../hoc/Aux'
import axios from 'axios'


class CaregiverInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar: '',
            proximity_defenition : 0,
            about_message: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        axios.get('/user/1').then(user => {
            const { first_name, last_name, street_address, state, city, zip, email, phone, title, longitude, latitude, password} = user.data[0]
            const { avatar, proximity_defenition, about_message} = this.state
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
                longitude,
                latitude,
                password,
                proximity_defenition,
                about_message
            }).then(
                this.setState({
                    avatar: avatar,
                    proximity_defenition: proximity_defenition,
                    about_message: about_message
            })).catch((error) => (console.log(error)))

        })
    }

    handleChange(event) {
        event.preventDefault()
        this.setState({ value: event.target.value })
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


    render() {
        // const { from } = this.props.location.state || '/'
        const { fireRedirect } = this.state
        return (
            <Aux>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div class="container">
                        <h1>Profile Details</h1>
                        <div className="row">
                            <div classNam="col-xs-12">
                                <div className="form-group">
                                    Upload an image of yourself. Pictures with your furry friends are best!!
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={(event) => this.handleAvatarUploadSubmit(event)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="form-group">
                                    Upload an image of yourself. Pictures with your furry friends are best!!
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={(event) => this.handleAvatarUploadSubmit(event)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="form-group">
                                    Upload an image of yourself. Pictures with your furry friends are best!!
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={(event) => this.handleAvatarUploadSubmit(event)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <div className="form-group">
                                    Include a descritprion about yourself. Consider what makes you trustworthy to enter peoples homes and provide animal care. What previous experience do you have? Sell yourself!!
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <textarea className="form-control" name="Text1" cols="40" rows="5" type="text" placeholder="About Yourself" onChange={(event) => this.handlePersonalDescriptionSubmit(event)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <div className="form-group">
                                    How many miles proximety from your home would you like to work? Consider commute times. Can you arrive in a resonable window according to your appointments? Each appontment allows for a 60 minute window before and after the suggested scheduling time.
                                </div>
                                <div className="col-xs-12 col-md-6">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*<Calandar />*/}

                    <input className="form-control btn btn-primary mb-2" type="submit" value="Submit" />

                </form>
                {fireRedirect && (
                    <Redirect to={'/'} />
                )}
            </Aux>
        )
    }
}

export default CaregiverInfo