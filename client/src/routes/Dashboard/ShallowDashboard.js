import React from 'react';
import { Table } from 'react-bootstrap';

import TableHead from 'components/TableHead';
import { toMoney } from 'utils/money';
import FundContactRow from './FundContactRow';

const ShallowDashboard = ({ company, stages, interests }) => (
  <div className="dashboard">
    <div className="company__data">
      <h1>{ company.name }</h1>
      <Table striped bordered condensed hover>
        <TableHead columns={ ['Industry', 'Investment Goal'] } />
        <tbody>
          <tr>
            <td>{company.industry}</td>
            <td>{ `${toMoney(company.investmentLowerBound)} - ${toMoney(company.investmentUpperBound)}` }</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="fundcontact__data">
      <h1>Fund Contacts</h1>
      <Table className="fundcontact__table"  striped bordered condensed hover>
        <TableHead columns={ ['Fund', 'Name', 'Location', 'Stage', 'Interest', 'Why We\'re Interested in Them', 'Why They\'re Interested in Us'] } />
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

export default ShallowDashboard;
