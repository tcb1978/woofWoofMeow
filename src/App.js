import React, { Component } from 'react';
import Layout from './containers/Layout/Layout'
import routes from './routes/routes';


class App extends Component {
  render() {
    return (
      <Layout>{routes}</Layout>
    )
  }
}

export default App;
