import React, { Component } from 'react';
import axios from 'axios';
import routes from './routes/routes';
import { connect } from 'react-redux';
import { getUser } from './redux/ducks/reducer';

class App extends Component {
  // componentWillMount() {
  //   // Gets the empty user object
  //   axios.get('/user').then( user => {
  //       this.props.getUser( 'App User', user.data );
  //       console.log( 'Redux User', this.props.user );
  //   }).catch(error => console.log(error))
  // }

  render() {
    return (
      <div>{ routes }</div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { user: state.user };
};

const mapDispatchToProps = {
  getUser: getUser
};

export default connect(mapStateToProps , mapDispatchToProps, null, { pure: false })(App);
