class RegistrationView {
  _container = document.querySelector('.container');
  _signUp = document.querySelector('.signup-link');
  _login = document.querySelector('.login-link');

  constructor() {
    this.signUp();
    this.login();
  }

  containerSignUp() {
    this._container.classList.add('active');
  }
  containerLogin() {
    this._container.classList.remove('active');
  }

  signUp() {
    this._signUp.addEventListener('click', this.containerSignUp.bind(this));
  }

  login() {
    this._login.addEventListener('click', this.containerLogin.bind(this));
  }
}
export default new RegistrationView();
