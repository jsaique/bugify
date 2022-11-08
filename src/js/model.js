import { async } from 'regenerator-runtime';
import { API_URL } from './config';
// import { getJSON } from './helpers';

const state = {
  users: {},
};

// console.log(API_URL);
const data = API_URL;

export const { users } = data.data;
state.users = {
  name: users.name,
  username123: users.username,
  password: users.password,
  tickets: users.tickets,
};
// console.log(users);
