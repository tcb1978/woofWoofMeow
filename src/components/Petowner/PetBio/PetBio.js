import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './PetBio.css';
import axios from 'axios';
import { connect } from 'react-redux';


class PetBio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // userabout_message : '',
            // useravatar : '',
            // usercity : '',
            // useremail : '',
            // userfirst_name : '',
            // userlast_name : '',
            // userlatitude : '',
            // userlongitude : '',
            // userpassword : '',
            // userphone : '',
            // userproximity : '',
            // userstate : '',
            // userstreet_address : '',
            // usertitle : '',
            // useruser_id : '',
            // userzip : '',
            // age: '',
            // animal_id: '',
            // animal_name: '',
            // breed: '',
            // sex: '',
            // weight: '',
            // animal_avatar : '',
            // PetBioIsHidden : true,
            animals: []
        }
    }

    componentDidMount() {
        // axios.get('/users').then( response => {
            
            // const { about_message, avatar, city, email, first_name, last_name, latitude, longitude, password, phone, proximity, state, street_address, title, user_id, zip} = response.data[0]
            
            // this.setState({
            //     about_message : about_message,
            //     avatar : avatar,
            //     city : city,
            //     email : email,
            //     first_name : first_name,
            //     last_name : last_name,
            //     latitude : latitude,
            //     longitude : longitude,
            //     password : password,
            //     phone : phone,
            //     proximity : proximity,
            //     state : state,
            //     street_address : street_address,
            //     title : title,
            //     user_id : user_id,
            //     zip : zip,
            // })

            axios.get(`/animal`).then( animals => {
                console.log( 'Animals', animals.data );
                // const { animal_id, animal_name, breed, age, weight, sex, animal_avatar } = animal.data[0];
                this.setState({
                    animals: animals.data
                })
            }).catch(error => console.log(error));

        // }).catch(error => console.log(error))
    }

    showPetBio = () => {
        this.setState(prevState => ({ petBioIsHidden: !prevState.petBioIsHidden }));
    }

    render() {
        console.log( 'Animal', this.state.animals );
        const { user } = this.props;
        const { animals } = this.state;

        return (
            <Aux>
                { this.state.animals.length &&
                <div className="PetBio">
                    <div className="UserPetBio">
                        <div className="AvatarDisplay">
                            <div className="AnimalAvatar">
                                <img onClick={ this.showPetBio } src={ animals[0].animal_avatar } alt="avatar"/>
                                <span onClick={ this.showPetBio } >{ animals[0].animal_name }</span>
                            </div>
                        </div>
                    </div>

                    { this.state.petBioIsHidden && 
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
