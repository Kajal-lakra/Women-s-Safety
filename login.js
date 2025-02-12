document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Add your own validation or authentication logic here
    if (username && password) {
        alert('Login successful!');
    } else {
        alert('Please fill in both fields.');
    }
});
