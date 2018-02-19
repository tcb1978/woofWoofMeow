import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Aux from '../../../../hoc/Aux';

class CaregiverInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar: '',
            proximity_definition : 0,
            about_message: ''
        }
    }

    handleChange(property, event) {
        event.preventDefault();
        this.setState({ [property]: event.target.value });
    }

    render() {
        return (
            <Aux>
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
                                    <option value="3">5</option>
                                    <option value="7">7</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default CaregiverInfo;