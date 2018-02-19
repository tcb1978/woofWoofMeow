import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './PetBio.css';

class PetBio extends Component {
    render() {
        return (
            <Aux>
                <div className="Landscape"></div>
                <div className="PetBio">
                    <div className="PetBioAvatar"></div>
                    <div className="UserPetBio">
                        <div className="header">
                            <h1>Users's Name</h1>
                            <i class="UserEdit fas fa-edit"></i>
                        </div>
                        <div className="AvatarDisplay">
                            <div className="AnimalAvatar"><span>Dog's Name</span></div>
                            <div className="AnimalAvatar"><span>Dog's Name</span></div>
                            <div className="AnimalAvatar"><span>Dog's Name</span></div>
                        </div>
                    </div>
                    <div className="PetBioDropDown">
                        <div className="column-style">
                            <div className="col-xs-12 col-sm-4">
                                <div className="PetBioDropDownHeader">
                                    <div className="Avatar"></div>
                                    <div className="Name"><h1>Berry</h1></div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                            <ul className="PetDetailsList">
                                <li>Breed <span>    Hound</span></li>
                                <li>Age <span>  6 years</span></li>
                                <li>Weight <span>   60 lbs.</span></li>
                                <li>Sex <span>  Female</span></li>
                            </ul>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                            <div>minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
};

export default PetBio;