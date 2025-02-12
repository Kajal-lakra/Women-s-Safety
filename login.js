document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginForm');
    const forgotPasswordButton = document.getElementById('forgotPassword');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log('Email:', email);
        console.log('Password:', password);
        // Add your authentication logic here
        window.location.href = '/Profile'; // Navigate to Profile page after successful login
    });

    forgotPasswordButton.addEventListener('click', () => {
        window.location.href = '/ForgotPassword';
    });
});
