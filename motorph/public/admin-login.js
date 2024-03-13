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
            const response = await fetch('admin.csv');
            if (!response.ok) {
                throw new Error('Failed to fetch admin.csv');
            }
            const data = await response.text();
            const lines = data.trim().split('\n');
            const credentials = lines.map(line => line.split(','));
            const validCredential = credentials.find(cred => cred[0].trim() === username && cred[1].trim() === password);

            if (validCredential) {
                // After validating credentials
                const employeeID = validCredential[2];
                window.location.href = `admin-dashboard.html?employeeID=${employeeID}`;
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
