import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import routes from './routes/routes';

class App extends Component {
  render() {
    return (
      <div>{routes}</div>
    )
  }
}

export default App;
