import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    getUsers {
      _id
      email
      password
    }
  }
`;

export const QUERY_ITEMS = gql`
  query getItems {
    getItems {
      _id
      itemName
      category
    }
  }
`;

// export const QUERY_LOCATIONS = gql`
//   query getLocations {
//     locations {
//       _id
//       name
//       address
//     }
//   }
// `;

// export const QUERY_DONATIONS = gql`
//   query getDonations {
//     donations {
//       _id
//       quantity
//       status
//     }
//   }
// `;