import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Aux from '../../hoc/Aux';
import axios from 'axios';

class AnimalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fireRedirect: false,
            name: '',
            breed: '',
            age: '',
            weight: '',
            sex: '',
            user_id: ''
        };
    }

    handleNameSubmit = (event) => {
        event.preventDefault();
        const name = event.target.value;
        this.setState({
            name: name
        })
    }

    handleBreedSubmit = (event) => {
        event.preventDefault();
        const breed = event.target.value;
        this.setState({
            breed: breed
        })
    }

    handleAgeSubmit = (event) => {
        event.preventDefault();
        const age = event.target.value;
        this.setState({
            age: age
        })
    }

    handleWeightSubmit = (event) => {
        event.preventDefault();
        const weight = event.target.value;
        this.setState({
            weight: weight
        })
    }

    handleSexSubmit = (event) => {
        event.preventDefault();
        const sex = event.target.value;
        this.setState({
            sex: sex
        })
    }

    handleUserIdSubmit = (event) => {
        event.preventDefault();
        const user_id = event.target.value;
        this.setState({
            user_id: user_id
        })
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

    render() {
        const { fireRedirect } = this.state
        return (
            <Aux>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>
                        Name:<input type="text" placeholder="name" onChange={(event) => this.handleNameSubmit(event)} />
                    </label>

                    <label>
                        Breed:<input type="text" placeholder="breed" onChange={(event) => this.handleBreedSubmit(event)} />
                    </label>

                    <label>
                        Age:<input type="text" placeholder="age" onChange={(event) => this.handleAgeSubmit(event)} />
                    </label>

                    <label>
                        Weight:<input type="text" placeholder="weight" onChange={(event) => this.handleWeightSubmit(event)} />
                    </label>

                    <label>
                        Sex:<input type="text" placeholder="sex" onChange={(event) => this.handleSexSubmit(event)} />
                    </label>

                    <label>
                        User Id:<input type="text" placeholder="user id" onChange={(event) => this.handleUserIdSubmit(event)} />
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

export default AnimalInfo;