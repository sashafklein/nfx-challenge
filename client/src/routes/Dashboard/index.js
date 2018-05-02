import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import ShallowDashboard from './ShallowDashboard';

const Dashboard = () => (
  <Query
    query={gql`
      {
        companies(id: 1) {
          name
          id
          industry
          investmentLowerBound
          investmentUpperBound
          fundContacts {
            name
            location
            stage
            interest
            whyWereInterested
            whyTheyreInterested
            id
            fund {
              name
              id
            }
          }
        },
        stages,
        interests
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const { stages, companies, interests } = data;
      const company = companies[0];

      return (
        <ShallowDashboard company={ company } stages={ stages } interests={ interests } />
      );
    }}
  </Query>
);

export default Dashboard;
