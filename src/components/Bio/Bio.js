import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Bio.css';
import axios from 'axios';

class Bio extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        axios.get('/users').then(response => {
            const { about_message, avatar, city, email, first_name, last_name, latitude, longitude, password, phone, proximity, state, street_address, title, user_id, zip } = response.data[0]
            this.setState({
                user_id: user_id,
                first_name: first_name,
                avatar: avatar
            })
        }).catch(error => console.log(error))
    }
    render() {
        return (
            <Aux>
                <div className="Landscape"></div>
                <div className="Bio">
                    <div className="BioAvatar"><img src={this.state.avatar} /></div>
                    <div>
                        <h1>{this.state.first_name}</h1>
                        <i class="UserEdit fas fa-edit"></i>
                    </div>
                    <div className="UserBio">
                        <caption className="BioCaption" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis, tortor vitae sodales venenatis, quam orci scelerisque odio, eu tempus quam tellus sed nulla. Duis vel erat sed sapien eleifend vulputate ut quis est.</caption>
                    </div>
                </div>
            </Aux>
        )
    }
};

export default Bio;