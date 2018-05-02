import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Table } from 'react-bootstrap';

import TableHead from './TableHead';
import FundContactRow from './FundContactRow';

const Dashboard = () => (
  <Query
    query={gql`
      {
        companies(id: 1) {
          name
          id
          industry
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
      // if (error) debugger
      if (error) return <p>Error :(</p>;
      const { stages, companies, interests } = data;
      const company = companies[0];

      return (
        <div className="dashboard">
          <div className="company__data">
            <h1>{ company.name }</h1>
            <Table striped bordered condensed hover>
              <TableHead rows={ ['Industry'] } />
              <tbody>
                <tr><td>{company.industry}</td></tr>
              </tbody>
            </Table>
          </div>
          <div className="fundcontact__data">
            <h1>Fund Contacts</h1>
            <Table className="fundcontact__table"  striped bordered condensed hover>
              <TableHead rows={ ['Fund', 'Name', 'Location', 'Stage', 'Interest', 'Why We\'re Interested in Them', 'Why They\'re Interested in Us'] } />
              <tbody>
                {
                  company.fundContacts.map((contact, index) => (
                    <FundContactRow
                      contact={ contact }
                      stages={ stages }
                      interests={ interests }
                      key={ index }
                    />
                  ))
                }
              </tbody>
            </Table>
          </div>
        </div>
      );
    }}
  </Query>
);

export default Dashboard;
