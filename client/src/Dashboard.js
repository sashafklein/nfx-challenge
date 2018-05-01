import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Dashboard = () => (
  <Query
    query={gql`
      {
        fundContacts(companyID: 1) {
          name
          id
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.fundContacts.map(({ id, name }, index) => (
        <div key={index}>
          <p>{`${id}: ${name}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default Dashboard;
