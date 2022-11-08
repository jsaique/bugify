import * as model from './model.js';
import logInView from './views/logInView.js';
// import registrationView from './views/registrationView.js';

// if (module.hot) {
//   module.hot.accept();
// }

let currentAccount;

const controlLogin = function (e) {
  e.preventDefault();
  currentAccount = model.users.find(
    user => user.username === logInView._unField.value
  );

  // if (currentAccount?.password === +logInView._pwField.value) {
  //   console.log('Logged in');
  // } else {
  //   console.log('Wrong password');
  // }

  currentAccount?.password === +logInView._pwField.value
    ? (window.location.href = '../../pages/homepage.html')
    : alert('Wrong password');
};

// Computing usernames
// const createUserNames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };

const controlAdmin = function (e) {
  e.preventDefault();
  console.log('Admin');
  // window.location = '../../homepage.html';
};

const controlUser = function () {
  console.log('User');
};
const init = function () {
  // createUserNames(model.users);
  logInView._addHandlerLogin(controlLogin);
  logInView._addHandlerAdmin(controlAdmin);
  logInView._addHandlerUser(controlUser);
};

init();
