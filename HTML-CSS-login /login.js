// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  //   Your custom logic to handle the form submission
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Example validation: Check if both username and password are not empty
  if (username.trim() === '' || password.trim() === '') {
    alert('Please enter both username and password.');
    return; // Stop further processing
  }

  // If validation passes, proceed to redirect
  // For example, you can use window.location.href to navigate to the desired URL
  window.location.href = 'http://localhost:5601/app/management/kibana/indexPatterns';
});
