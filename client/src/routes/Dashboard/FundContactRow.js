import React from 'react';
import { Link } from 'react-router-dom';

import ContactDropdown from './ContactDropdown';
import ContactTextInput from './ContactTextInput';

const FundContactRow = ({ contact, stages, interests }) => {
  const { fund, name, location, stage, interest, whyWereInterested, whyTheyreInterested, id } = contact;

  const ids = {
    fundContactID: id,
    companyID: 1 // Not dealing with separate auth in this app
  };

  return (
    <tr>
      <td><Link to={ `/funds/${fund.id}` }>{ fund.name }</Link></td>
      <td>
        <ContactTextInput ids={ ids } text={ name } field="name" />
      </td>
      <td>{ location }</td>
      <td>
        <ContactDropdown
          ids={ ids }
          options={ stages }
          choice={ stage }
          field="stage"
        />
      </td>
      <td>
        <ContactDropdown
          ids={ ids }
          options={ interests }
          choice={ interest }
          field="interest"
        />
      </td>
      <td>
        <ContactTextInput ids={ ids } text={ whyWereInterested } field="whyWereInterested" />
      </td>
      <td>
        <ContactTextInput ids={ ids } text={ whyTheyreInterested } field="whyTheyreInterested" />
      </td>
    </tr>
  );
}

export default FundContactRow;
