import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser, logout } from '../../redux/ducks/reducer';

import Petowner from './Petowner/Petowner';
import Caregiver from './Caregiver/Caregiver';

class Profile extends Component {
  constructor () {
    super();
    this.state = { }
  }

  componentDidMount() {
    axios.get('/user').then( user => {
      this.props.getUser( user.data );
      if ( !this.props.user.first_name ) {
        this.props.history.push('/');
      }
    }).catch(error => console.log(error));
    // Temporary redirect so I can see the UpdateMessage component
    this.props.history.push('/update-message');
  }

  logout = () => {
    axios.post(`/logout`).then( user => {
      this.props.logout( user.data );
      this.props.history.push('/');
    }).catch(error => console.log(error));
  }

  render() {
    const { user } = this.props;
    console.log( 'Profile return user redux', user );
    return (
      <Aux>
          { user.title === 'petowner'
            ? <Petowner logout={ this.logout } />
            : <Caregiver logout={ this.logout } />
          }
          
          <div className="footer-profile" style={{ background: '#959595',color: '#fff',padding: '5px',display: 'flex',position: 'fixed',bottom: '0',width: '100%' }}>
            <span style={{ margin: 'auto' }}>&copy; All rights reserved.</span>
          </div>
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