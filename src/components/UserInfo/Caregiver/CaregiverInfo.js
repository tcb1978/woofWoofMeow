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
        const { avatar, proximity_defenition, about_message } = this.state
        axios.post('', {
            avatar, 
            proximity_defenition, 
            about_message
        }).then(
            this.setState({
                avatar: avatar,
                proximity_defenition: proximity_defenition,
                about_message: about_message
            })
            )
            .catch((error) => (console.log(error)))
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
                    <div className="form-group">
                        Upload an image of yourself. Pictures with your furry friends are best!!
                        <input className="form-control-file" id="exampleFormControlFile1" type="text" placeholder="personal image" onChange={(event) => this.handleAvatarUploadSubmit(event)} />
                    </div>
                    <div className="form-group">
                        Include a descritprion about yourself. Consider what makes you trustworthy to enter peoples homes and provide animal care. What previous experience do you have? Sell yourself!! 
                        <textarea className="form-control" name="Text1" cols="40" rows="5" type="text" placeholder="About Yourself" onChange={(event) => this.handlePersonalDescriptionSubmit(event)} />
                    </div>
                    <div className="form-group">
                        How many miles proximety from your home would you like to work? Consider commute times. Can you arrive in a resonable window according to your appointments? Ieach appontment allows for a 60 minute window before and after the suggested scheduling time.
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