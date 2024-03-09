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

        // Validate credentials from CSV file
        fetch('employee.csv')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                if (!data.trim()) {
                    throw new Error('CSV data is empty');
                }

                const rows = data.split('\n');
                const headers = rows[0].split(',');
                const usernameIndex = headers.indexOf('username');
                const passwordIndex = headers.indexOf('password');

                if (usernameIndex === -1 || passwordIndex === -1) {
                    throw new Error('Username or password column not found in CSV');
                }

                let found = false;
                for (let i = 1; i < rows.length; i++) {
                    const values = rows[i].split(',');
                    const csvUsername = values[usernameIndex].trim();
                    const csvPassword = values[passwordIndex].trim();

                    if (username === csvUsername && password === csvPassword) {
                        // Login successful
                        found = true;
                        window.location.href = "employee-dashboard.html"; // Redirect to dashboard
                        break;
                    }
                }

                if (!found) {
                    // Login failed
                    alert('Invalid username or password.');
                }
            })
            .catch(error => {
                console.error('Error:', error.message);
                // Handle errors (e.g., show error messages to the user)
            });
    });
});
