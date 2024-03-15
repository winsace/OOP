document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");
    const passwordResetPopup = document.getElementById("passwordResetPopup");
    const resetUsernameInput = document.getElementById("resetUsername");
    const resetUsernameError = document.getElementById("resetUsernameError");
    const cancelResetButton = document.getElementById("cancelResetButton");

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

        if (!password) {
            passwordError.textContent = "Please enter your password.";
            return;
        }

        try {
            const response = await fetch('database/cred.csv');
            if (!response.ok) {
                throw new Error('Failed to fetch cred.csv');
            }
            const data = await response.text();
            const lines = data.trim().split('\n');
            const credentials = lines.map(line => line.split(','));

            const userCredential = credentials.find(cred => cred[0].trim() === username && cred[1].trim() === password);
            
            if (userCredential) {
                const role = userCredential[3].trim();
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
            } else {
                // Login failed
                alert('Invalid username or password.');
            }
        } catch (error) {
            console.error('Error fetching or parsing CSV:', error);
            alert('An error occurred. Please try again later.');
        }
    });

    forgotPasswordLink.addEventListener("click", function(event) {
        event.preventDefault();
        passwordResetPopup.style.display = "block"; // Display the password reset popup
    });

    function closePasswordResetPopup() {
        passwordResetPopup.style.display = "none"; // Hide the password reset popup
        resetUsernameInput.value = ""; // Reset username input field
        resetUsernameError.textContent = ""; // Reset error message
    }

    const passwordResetForm = document.getElementById("passwordResetForm");

    passwordResetForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        // Reset error message
        resetUsernameError.textContent = "";

        const username = resetUsernameInput.value.trim();

        if (!username) {
            resetUsernameError.textContent = "Please enter your username.";
            return;
        }

        try {
            const response = await fetch('database/cred.csv');
            if (!response.ok) {
                throw new Error('Failed to fetch cred.csv');
            }
            const data = await response.text();
            const lines = data.trim().split('\n');
            const credentials = lines.map(line => line.split(','));

            const userExists = credentials.some(cred => cred[0].trim() === username);

            if (userExists) {
                // Send password reset link via email (this is just a placeholder action)
                alert("Password reset link has been sent to your email address.");
                // Close the popup window
                closePasswordResetPopup();
            } else {
                // Display error if username doesn't exist
                resetUsernameError.textContent = "No matching username found.";
            }
        } catch (error) {
            console.error('Error fetching or parsing CSV:', error);
            alert('An error occurred. Please try again later.');
        }
    });

    // Event listener for cancel button
    cancelResetButton.addEventListener("click", function(event) {
        event.preventDefault();
        closePasswordResetPopup(); // Close the password reset popup
    });
});
