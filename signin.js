document.addEventListener('DOMContentLoaded', (event) => {
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (event1) => {
    event1.preventDefault(); // prevent form from submitting

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // checks if username and password are correct
    if (username === 'myusername' && password === 'mypassword') {
      alert('Login successful!');
    } else {
      alert('Incorrect username or password.');
    }
  });
});
