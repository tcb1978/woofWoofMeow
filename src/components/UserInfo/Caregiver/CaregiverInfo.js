import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Aux from '../../../hoc/Aux';
import axios from 'axios';

class CaregiverInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    handleSubmit(event) {
        event.preventDefault();
        const {} = this.state;
        axios.post('', {

        }).then(
            this.setState({})
            )
            .catch((error) => (console.log(error)))
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ value: event.target.value });
    }

    handlePersonalDescriptionSubmit(event) {
        event.preventDefault();
        const first_name = event.target.value;
        this.setState({
            first_name: first_name
        })
    }

    handleHowManyMilesProximitySubmit(event) {
        event.preventDefault();
        const last_name = event.target.value;
        this.setState({
            last_name: last_name
        })
    }


    render() {
        // const { from } = this.props.location.state || '/'
        const { fireRedirect } = this.state
        return (
            <Aux>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    
                    <label>About Yourself: </label>

                    <textarea name="Text1" cols="40" rows="5" type="text" placeholder="About Yourself" onChange={(event) => this.handlePersonalDescriptionSubmit(event)} />

                    <label>How many miles proximety from your home would you like to work?</label>
                    
                    <select
                        type="text"
                        placeholder="last name"
                        onChange={(event) => this.handleHowManyMilesProximitySubmit(event)}>
                        <option value="3">3</option>
                        <option value="3">5</option>
                        <option value="7">7</option>
                        <option value="10">10</option>
                    </select>

                    <input type="submit" value="Submit" />
                </form>
                {fireRedirect && (
                    <Redirect to={'/'} />
                )}
            </Aux>
        );
    }
}

export default CaregiverInfo;