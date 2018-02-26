import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './PetBio.css';
import axios from 'axios';
import { getUser } from '../../../redux/ducks/reducer';
import { connect } from 'react-redux';

class PetBio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userabout_message : '',
            useravatar : '',
            usercity : '',
            useremail : '',
            userfirst_name : '',
            userlast_name : '',
            userlatitude : '',
            userlongitude : '',
            userpassword : '',
            userphone : '',
            userproximity : '',
            userstate : '',
            userstreet_address : '',
            usertitle : '',
            useruser_id : '',
            userzip : '',
            age: '',
            animal_id: '',
            animal_name: '',
            breed: '',
            sex: '',
            weight: '',
            animal_avatar : '',
            PetBioIsHidden : true,
        }
    }

    componentDidMount() {
        axios.get('/users').then(response => {
            console.log('this.props', this.props);
            
            const { about_message, avatar, city, email, first_name, last_name, latitude, longitude, password, phone, proximity, state, street_address, title, user_id, zip} = response.data[0]
            
            this.setState({
                about_message : about_message,
                avatar : avatar,
                city : city,
                email : email,
                first_name : first_name,
                last_name : last_name,
                latitude : latitude,
                longitude : longitude,
                password : password,
                phone : phone,
                proximity : proximity,
                state : state,
                street_address : street_address,
                title : title,
                user_id : user_id,
                zip : zip,
            })

            axios.get(`/animal`).then( animal => {
                const { animal_id, animal_name, breed, age, weight, sex, animal_avatar } = animal.data
                
                this.setState({
                    animal_id: animal_id,
                    animal_name: animal_name,
                    breed: breed,
                    age: age,
                    weight: weight,
                    sex: sex,
                    animal_avatar: animal_avatar
                })
            })
        }).catch(error => console.log(error))
    }

    showPetBio = () => {
        this.setState(prevState => ({ petBioIsHidden: !prevState.petBioIsHidden }));
    }

    render() {
        const petBio = (
            <div className="PetBioDropDown">
                <div className="container">
                    <div className="row">
                        <div className="column-style">
                            <div className="col-xs-12 col-sm-4">
                                <div className="PetBioDropDownHeader">
                                    <div className="Avatar"><img src={this.state.animal_avatar} /></div>
                                    <div className="Name"><h1>{this.state.animal_name}</h1></div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <ul className="PetDetailsList">
                                    <li>Breed: <span>    {this.state.breed}</span></li>
                                    <li>Age: <span>  6 years</span></li>
                                    <li>Weight: <span>   60 lbs.</span></li>
                                    <li>Sex: <span>  Female</span></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <div>{this.state.about_message}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> );

        return (
            <Aux>
                <div className="Landscape"></div>
                <div className="PetBio">
                    <div className="PetBioAvatar">
                    <img src={this.state.avatar} /></div>
                    <div className="UserPetBio">
                        <div className="header">
                            <h1>{this.state.first_name}</h1>
                            <i className="UserEdit fas fa-edit"></i>
                        </div>
                        <div className="AvatarDisplay">
                            <div className="AnimalAvatar">
                                <img onClick={ this.showPetBio } src={this.state.animal_avatar} />
                                <span onClick={ this.showPetBio } >{this.state.animal_name}</span>
                            </div>
                        </div>
                    </div>
                    { this.state.petBioIsHidden && petBio }
                </div>
            </Aux>
        )
    }
};

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    getUser: getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(PetBio);