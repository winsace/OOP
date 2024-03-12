document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    fetch('test.csv')
        .then(response => response.text())
        .then(text => {
            const lines = text.trim().split('\n');
            // Skip the first line (header row) and then split the remaining lines by comma
            const data = lines.slice(1).map(line => line.split(','));
            const found = data.some(([user, pass]) => user.trim() === username.trim() && pass.trim() === password.trim());

            if (found) {
                alert("Login successful");
            } else {
                alert("Invalid username or password.");
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert("Error occurred while logging in.");
        });
});
