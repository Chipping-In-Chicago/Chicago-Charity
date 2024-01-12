import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      itemsDonated {

      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
    }
  }
`;

export const QUERY_ITEMS = gql`
  query getItems {
    items {
      _id
      itemName
      category
    }
  }
`;

export const QUERY_LOCATIONS = gql`
  query getLocations {
    locations {
      _id
      name
      address
    }
  }
`;

export const QUERY_DONATIONS = gql`
  query getDonations {
    donations {
      _id
      quantity
      status
    }
  }
`;