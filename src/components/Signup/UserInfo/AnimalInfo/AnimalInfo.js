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
            </Aux>
        )
    }
}

export default AnimalInfo;