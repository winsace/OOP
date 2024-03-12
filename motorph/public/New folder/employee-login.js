// employee-login.js
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Reset error messages
        usernameError.textContent = "";
        passwordError.textContent = "";

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username) {
            usernameError.textContent = "Please enter your username.";
            return;
        }

        if (!password) {
            passwordError.textContent = "Please enter your password.";
            return;
        }

        // Validate credentials from employeecred.js
        const foundUser = employeeCredentials.find(user => user.username === username && user.password === password);

        if (foundUser) {
            // Login successful
            window.location.href = "employee-dashboard.html"; // Redirect to dashboard
            alert('Login successful!');
        } else {
            // Login failed
            alert('Invalid username or password.');
        }
    });
});
