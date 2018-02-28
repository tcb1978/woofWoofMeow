import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './PetBio.css';
import axios from 'axios';
import { connect } from 'react-redux';


class PetBio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animals: []
        }
    }

    componentDidMount() {
        const { user } = this.props;
        axios.get(`/animal/${user.user_id}`).then( animals => {
            console.log( 'PetBio Animals', animals.data );
            this.setState({ animals: animals.data });
        }).catch(error => console.log(error));
    }

    showPetBio = () => {
        this.setState(prevState => ({ isHidden: !prevState.isHidden }));
    }

    render() {
        const { animals, isHidden } = this.state;
        console.log( 'Animal', animals );

        return (
            <Aux>
                { animals.length &&
                <div className="PetBio">
                    <div className="UserPetBio">
                        <div className="AvatarDisplay">
                            <div className="AnimalAvatar">
                                <img onClick={ this.showPetBio } src={ animals[0].animal_avatar } alt="avatar"/>
                                <span onClick={ this.showPetBio } >{ animals[0].animal_name }</span>
                            </div>
                        </div>
                    </div>

                    { isHidden && 
                    <div className="PetBioDropDown">
                        <div className="container">
                            <div className="row">
                                <div className="column-style">
                                    <div className="col-xs-12 col-sm-4">
                                        <div className="PetBioDropDownHeader">
                                            <div className="Avatar"><img src={ animals[0].animal_avatar } alt="avatar"/></div>
                                            <div className="Name"><h1>{ animals[0].animal_name }</h1></div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4">
                                        <ul className="PetDetailsList">
                                            <li>Breed: <span>    { animals[0].breed }</span></li>
                                            <li>Age: <span>  { animals[0].age } years</span></li>
                                            <li>Weight: <span>   { animals[0].weight } lbs.</span></li>
                                            <li>Sex: <span>  { animals[0].sex }</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm-4">
                                        <div>{ animals[0].animal_about_message }</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    }
                </div>
                }
            </Aux>
        )
    }
};

export default connect( state => state )( PetBio );
