import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { Grid, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Dashboard from 'routes/Dashboard';
import Fund from 'routes/Fund';

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
        <Router>
          <div>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <h1><Link to="/">Dashboard</Link></h1>
                </Navbar.Brand>
              </Navbar.Header>
            </Navbar>;
            <Grid>
              <Route exact path="/" component={ Dashboard } />
              <Route path="/funds/:fundID" component={ Fund } />
            </Grid>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
