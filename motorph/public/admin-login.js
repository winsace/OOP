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

        // Validate admin credentials (e.g., against a CSV file or database)
        // Replace this with your own logic
        if (username === "admin" && password === "adminpassword") {
            // Login successful
            alert('Admin login successful!');
            // Redirect to admin dashboard or other page
            window.location.href = "admin-dashboard.html";
        } else {
            // Login failed
            alert('Invalid username or password.');
        }
    });
});
