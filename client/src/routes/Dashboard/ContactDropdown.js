import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Mutation } from 'react-apollo';

import { updateContactField } from 'utils/actions';

const ContactDropdown = ({ ids, options, choice, field }) => {
  const UPDATE_CONTACT = updateContactField(field);

  const classes = ['warning', 'info', 'primary', 'success', 'danger'];

  return (
    <Mutation mutation={ UPDATE_CONTACT }>
      {(updateContact, { data, error, loading }) => {
        const computedChoice = data && data.fundContact
          ? data.fundContact[field]
          : choice;

        const mutate = (updates) => () => updateContact({ variables: Object.assign({}, ids, updates) });

        const format = (text) => text.split('_').join(' ').toUpperCase();

        return (
          <DropdownButton
            title={ format(computedChoice) }
            className={ `btn-${classes[options.indexOf(computedChoice)]}` }
            id={ `${field}-dropdown` }
          >
            {
              options.map((opt, ind) => (
                <MenuItem key={ ind } onSelect={ mutate({ [field]: opt }) }>
                  { format(opt) }
                </MenuItem>
              ))
            }
          </DropdownButton>
        );
      } }
    </Mutation>
  );
};

export default ContactDropdown;
