document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

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
            const response = await fetch('employee.csv');
            if (!response.ok) {
                throw new Error('Failed to fetch employee.csv');
            }
            const data = await response.text();
            const lines = data.trim().split('\n');
            const credentials = lines.slice(1).map(line => line.split(','));
            const validCredential = credentials.find(cred => cred[0].trim() === username && cred[1].trim() === password);

            if (validCredential) {
                // Login successful
                alert('Employee login successful!');
                // Redirect to employee dashboard or other page
                window.location.href = "employee-dashboard.html";
            } else {
                // Login failed
                alert('Invalid username or password.');
            }
        } catch (error) {
            console.error('Error fetching or parsing CSV:', error);
            alert('An error occurred. Please try again later.');
        }
    });
});
