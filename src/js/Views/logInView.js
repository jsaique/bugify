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
      icon.classList.toggle('fa-eye-slash');
    });
  }

  password() {
    this._pwFields.forEach(pwField => {
      // if (pwField.type === 'password') {
      //   pwField.type = 'text';
      // } else {
      //   pwField.type = 'password';
      // }

      const type =
        pwField.getAttribute('type') === 'password' ? 'text' : 'password';
      pwField.setAttribute('type', type);
    });
  }

  showPassword() {
    this._showPw.forEach(eyeIcon => {
      eyeIcon.addEventListener('click', this.password.bind(this));
    });
  }
}
export default new LoginView();
