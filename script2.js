// Simple validation and handling for login and signup
document.addEventListener('DOMContentLoaded', function() {

    // Handle Login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            if (username === "" || password === "") {
                alert("Please fill in all fields!");
            } else {
                // For demonstration, we simulate a login success
                alert(`Login successful for user: ${username}`);
            }
        });
    }

    // Handle Signup form submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('signup-username').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            if (username === "" || email === "" || password === "") {
                alert("Please fill in all fields!");
            } else {
                // For demonstration, we simulate a signup success
                alert(`Signup successful for user: ${username}`);
            }
        });
    }
});
