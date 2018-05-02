import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { Grid } from 'react-bootstrap';

import Dashboard from './Dashboard';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  opts: {
    mode: 'no-cors'
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Grid>
          <Dashboard />
        </Grid>
      </ApolloProvider>
    );
  }
}

export default App;
