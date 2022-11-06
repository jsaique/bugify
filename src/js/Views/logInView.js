class LoginView {
  _showPw = document.querySelectorAll('.fa-eye');
  _pwEye = document.querySelectorAll('.input-eye');
  _pwField = document.querySelector('.input-password');
  _unField = document.querySelector('.input-login');

  _btnLogin = document.querySelector('.btn-login');
  _btnAdmin = document.querySelector('.btn-admin-demo');
  _btnUser = document.querySelector('.btn-user-demo');

  constructor() {
    this.showPassword();
  }

  toggleEye() {
    this._showPw.forEach(icon => {
      const classEye =
        icon.getAttribute('class') === 'fa-solid fa-eye show-hide-pw'
          ? 'fa-solid fa-eye-slash show-hide-pw'
          : 'fa-solid fa-eye show-hide-pw';
      icon.setAttribute('class', classEye);
    });
  }

  password() {
    this._pwEye.forEach(pwField => {
      const type =
        pwField.getAttribute('type') === 'password' ? 'text' : 'password';
      pwField.setAttribute('type', type);
    });
  }

  showPassword() {
    this._showPw.forEach(icon => {
      icon.addEventListener('click', this.password.bind(this));
      icon.addEventListener('click', this.toggleEye.bind(this));
    });
  }

  _addHandlerLogin(handler) {
    this._btnLogin.addEventListener('click', handler);
  }

  _addHandlerAdmin(handler) {
    this._btnAdmin.addEventListener('click', handler);
  }
  _addHandlerUser(handler) {
    this._btnUser.addEventListener('click', handler);
  }
}
export default new LoginView();
