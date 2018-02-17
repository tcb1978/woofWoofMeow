import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Aux from '../../../../hoc/Aux';

class AnimalInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animal_name: '',
            breed: '',
            age: '',
            weight: '',
            sex: ''
        };
    }

    handleChange(property, event) {
        event.preventDefault();
        this.setState({ [property]: event.target.value });
    }

    render() {
        return (
            <Aux>
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
            </Aux>
        )
    }
}

export default AnimalInfo;