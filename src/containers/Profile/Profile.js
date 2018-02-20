import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Petowner from './Petowner/Petowner';
import Caregiver from './Caregiver/Caregiver';
import { connect } from 'react-redux';
import { login } from '../../redux/ducks/reducer';

class Profile extends Component {
  render() {
    return (
      <Aux>

        {/*
          { this.props.user.title === 'petowner'
          ? <Petowner/>
          : <Caregiver/>
        }
        */}
        <Petowner />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  login: login
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);