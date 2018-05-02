import React from 'react';
import { Mutation } from "react-apollo";

import { updateContactField } from 'utils/actions';

class ContactTextInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = { text: props.text };
  }

  render () {
    const { ids, field } = this.props;
    const { text } = this.state;

    const UPDATE_CONTACT = updateContactField(field);

    return (
      <Mutation mutation={ UPDATE_CONTACT }>
        {(updateContact, { data, error, loading }) => {
          const computedText = data && data.fundContact
            ? data.fundContact[field]
            : text || '';

          const mutate = (updates) => updateContact({ variables: Object.assign({}, ids, updates) });

          return (
            <input
              type="text"
              // Only save changes on blur (so the API isn't firing every character)
              onBlur={ (input) => {
                mutate({ [field]: input.target.value })
              }}
              onChange={ (input) => {
                this.setState({ text: input.target.value })
              }}
              value={ computedText }
            />
          );
        } }
      </Mutation>
    );
  }
};

export default ContactTextInput;
