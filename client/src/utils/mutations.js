import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      profile {
        _id
        name
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