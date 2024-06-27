document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const showPasswordCheckbox = document.getElementById("showPassword");

    // Toggle password visibility
    showPasswordCheckbox.addEventListener('change', function() {
        const passwordFieldType = passwordInput.getAttribute('type');
        if (passwordFieldType === 'password') {
            passwordInput.setAttribute('type', 'text');
        } else {
            passwordInput.setAttribute('type', 'password');
        }
    });

    // Password validation function
    function validatePassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    loginForm.addEventListener("submit", async function(event) {
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

        // Validate password
        if (!validatePassword(password)) {
            alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&)");
            return;
        }

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            const role = data.role;

            switch (role) {
                case "hr":
                    window.location.href = "hr/hrportal.html";
                    break;
                case "payroll":
                    window.location.href = "payroll/payrollportal.html";
                    break;
                case "employee":
                    window.location.href = "employee/employeeportal.html";
                    break;
                case "it":
                    window.location.href = "it/itportal.html";
                    break;
                default:
                    alert('Invalid role.');
            }
            // Display alert for successful login
            alert('Login successful!');
        } catch (error) {
            console.error('Login error:', error);
            alert('Invalid username or password.');
        }
    });

    // Forgot Password link functionality
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");
    const passwordResetPopup = document.getElementById("passwordResetPopup");
    const resetUsernameInput = document.getElementById("resetUsername");
    const resetUsernameError = document.getElementById("resetUsernameError");

    forgotPasswordLink.addEventListener("click", function(event) {
        event.preventDefault();
        passwordResetPopup.style.display = "block";
    });

    // Close password reset popup
    const cancelResetButton = document.getElementById("cancelResetButton");
    cancelResetButton.addEventListener("click", function(event) {
        event.preventDefault();
        passwordResetPopup.style.display = "none";
        resetUsernameInput.value = ""; // Clear input field
        resetUsernameError.textContent = ""; // Clear error message
    });

    // Validate reset password form
    const passwordResetForm = document.getElementById("passwordResetForm");
    passwordResetForm.addEventListener("submit", async function(event) {
        event.preventDefault();
        resetUsernameError.textContent = "";

        const resetUsername = resetUsernameInput.value.trim();

        if (!resetUsername) {
            resetUsernameError.textContent = "Please enter your username.";
            return;
        }

        try {
            // Simulate password reset functionality
            // Replace with actual password reset logic
            alert(`Password reset link sent to ${resetUsername}`);
            passwordResetPopup.style.display = "none";
            resetUsernameInput.value = ""; // Clear input field
        } catch (error) {
            console.error('Password reset error:', error);
            alert('Error resetting password. Please try again.');
        }
    });

    // Developer notes popup functionality
    const developerNotesLink = document.getElementById("developerNotesLink");
    const developerNotesPopup = document.getElementById("developerNotesPopup");
    const closeDeveloperNotesPopup = document.getElementById("closeDeveloperNotesPopup");

    developerNotesLink.addEventListener("click", function(event) {
        event.preventDefault();
        developerNotesPopup.style.display = "block";
    });

    closeDeveloperNotesPopup.addEventListener("click", function(event) {
        event.preventDefault();
        developerNotesPopup.style.display = "none";
    });
});
