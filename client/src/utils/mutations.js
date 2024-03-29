import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem($name: String!, $category: String!) {
    addItem(name: $name, category: $category) {
      _id
      name
      category
    }
  }
`;

export const ADD_LOCATION = gql`
  mutation addLocation($name: String!, $address: String!) {
    addLocation(name: $name, address: $address) {
      _id
      name
      address
    }
  }
`;

export const ADD_DONATION = gql`
  mutation addDonation($itemId: ID!, $quantity: Int!) {
    addDonation(itemId: $itemId, quantity: $quantity) {
      _id
      quantity
      status
    }
  }
`;

export const UPDATE_DONATION_STATUS = gql`
  mutation updateDonationStatus($donationId: ID!, $newStatus: String!) {
    updateDonationStatus(donationId: $donationId, newStatus: $newStatus) {
      _id
      status
    }
  }
`;

export const UPDATE_ITEM_COUNT = gql `
mutation updateItemCount($id: ID, $newcount: Int) {
  updateItemCount(_id: $id, newcount: $newcount) {
    _id
    itemCount
    itemName
    category
  }
}

`