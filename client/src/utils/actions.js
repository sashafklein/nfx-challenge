import gql from 'graphql-tag';

export const updateContactField = (field) => gql`
  mutation updateContact($${field}: String!, $companyID: ID!, $fundContactID: ID!) {
    fundContact(${field}: $${field}, companyID: $companyID, fundContactID: $fundContactID) {
      ${field}
    }
  }
`;
