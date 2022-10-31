class LoginView {
  // _parentElement = document.querySelector('.container');
  _showPw = document.querySelectorAll('.fa-eye');
  // _hidePw = document.querySelectorAll('.fa-eye-slash');
  _pwFields = document.querySelectorAll('.password');

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
    this._pwFields.forEach(pwField => {
      const type =
        pwField.getAttribute('type') === 'password' ? 'text' : 'password';
      pwField.setAttribute('type', type);
    });
  }

  showPassword() {
    this._showPw.forEach(eyeIcon => {
      eyeIcon.addEventListener('click', this.password.bind(this));
      eyeIcon.addEventListener('click', this.toggleEye.bind(this));
    });
  }
}
export default new LoginView();
