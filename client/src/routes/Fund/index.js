import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Table } from 'react-bootstrap';

import { toMoney } from 'utils/money';

import TableHead from 'components/TableHead';

class Fund extends React.Component {
  constructor (props) {
    super(props);
    this.state = { expanded: false };
  }

  render () {
    const { match } = this.props;
    const { expanded } = this.state;

    return <Query
      query={gql`
        {
          fund(id: ${match.params.fundID}) {
            name
            size
            fundContacts {
              investedAmount
              company {
                name
                industry
                id
              }
            }
          },
          companies(id: 1) {
            industry
            id
            investmentLowerBound
            investmentUpperBound
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;

        const { fund, companies } = data;

        // Cheating - in real app would share current company using something like Redux
        const company = companies[0];

        const contacts = fund.fundContacts.filter(c => c.company.id !== company.id);

        const investedInSameBallpark = (contact) => company.investmentLowerBound <= contact.investedAmount && company.investmentUpperBound >= contact.investedAmount;
        const shownContacts = expanded
          ? contacts
          : contacts.filter(c => (c.company.industry === company.industry)
            && investedInSameBallpark(c));

        return (
          <div>
            <h1>{ fund.name }</h1>
            {
              shownContacts.length
                ? <Table>
                  <TableHead columns={ ['Company Name', 'Industry', 'Amount Invested'] } />
                  <tbody>
                    {
                      shownContacts.map((contact, index) => (
                        <tr>
                          <td>{ contact.company.name }</td>
                          <td>{ contact.company.industry }</td>
                          <td>{ toMoney(contact.investedAmount) }</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table>
                : <h4>No relevant investees</h4>
            }
            { !expanded
              ? <a style={{ marginTop: '20px' }} onClick={ () => this.setState({ expanded: true }) }>
                Show all investees (currently filtering by industry and investment size)
              </a>
              : null
            }
          </div>
        );
      } }
    </Query>
  }
};

export default Fund;