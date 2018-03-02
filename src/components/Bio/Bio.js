import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Bio.css';
// import axios from 'axios';
import { connect } from 'react-redux';
import Popup from './Popup/Popup'

class Bio extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }


    render() {
        const { user, logout } = this.props;
        return (
            <Aux>
                <div className="Landscape"></div>
                <div className="Bio">
                    <div className="BioAvatar"><img src={user.avatar} alt="Avatar" className="img-responsive img-circle"/></div>
                    <div className="info">
                        <div>
                            <h1>{user.first_name}</h1>
                            <span onClick={this.togglePopup.bind(this)}><i className="UserEdit fas fa-edit"></i></span>
                        </div>
                        <button className="signout-btn btn-primary" onClick={ () => logout() }>Sign out</button>
                        
                        { this.props.user.title === 'caregiver' &&
                        <div className="UserBio">
                            <div className="BioCaption" >{user.about_message}</div>
                        </div>
                        }
                    </div>
                    {this.state.showPopup ?
                        <Popup closePopup={this.togglePopup.bind(this)} /> : null
                    }
                </div>
            </Aux>
        )
    }
};

export default connect( state => state )( Bio );