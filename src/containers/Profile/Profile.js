import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, logout } from '../../redux/ducks/reducer';

import Petowner from './Petowner/Petowner';
import Caregiver from './Caregiver/Caregiver';

class Profile extends Component {

  componentDidMount() {
    // Gets the empty user object
    axios.get('/user').then( user => {
        this.props.getUser( user.data );
        console.log( 'Redux User', this.props.user );
    }).catch(error => console.log(error))
}

  logout = () => {
    axios.post(`/logout`).then( user => {
        this.props.logout( user.data );
        console.log( 'Redux User Signout', this.props.user );
        this.props.history.push('/');
    }).catch(error => console.log(error));
  }

  render() {
    const { user } = this.props;
    return (
      <Aux>
        { user.title ? (
            user.title === 'petowner'
            ? <Petowner logout={ this.logout }/>
            : <Caregiver logout={ this.logout }/>
          ) : (
            <Redirect to="/"/>
          ) 
        }
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = {
  getUser: getUser,
  logout: logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);