import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Bio.css';
// import axios from 'axios';
import { connect } from 'react-redux';

class Bio extends Component {

    render() {
        const { user, logout } = this.props;
        return (
            <Aux>
                <div className="Landscape"></div>
                <div className="Bio">
                    <div className="BioAvatar"><img src={user.avatar} alt="Avatar"/></div>
                    <div className="info">
                        <div>
                            <h1>{user.first_name}</h1>
                            <i className="UserEdit fas fa-edit"></i>
                        </div>
                        
                        <button className="signout-btn" onClick={ () => logout() }>Sign out</button>
                        
                        { this.props.user.title === 'caregiver' &&
                        <div className="UserBio">
                            <div className="BioCaption" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis, tortor vitae sodales venenatis, quam orci scelerisque odio, eu tempus quam tellus sed nulla. Duis vel erat sed sapien eleifend vulputate ut quis est.</div>
                        </div>
                        }
                    </div>
                </div>
            </Aux>
        )
    }
};

export default connect( state => state )( Bio );