document.addEventListener('DOMContentLoaded', function () {
    // Extract username from URL
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    // Fetch user data using the extracted username
    fetchUserData(username);

    // Event listener for update button
    document.getElementById('updateBtn').addEventListener('click', function () {
        // Implement update functionality
        // Example: send updated data to server
        alert('Update Successful.');
    });

    // Event listener for close button
    document.getElementById('closeBtn').addEventListener('click', function () {
        window.close(); // Close the pop-up window
    });
});

function fetchUserData(username) {
    fetch('../database/cred.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            const headers = rows[0].split(',');
            let userData = {};

            // Find the row with the matching username field
            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');
                const csvUsername = values[0].trim(); // Assuming username is in the first column
                if (csvUsername === username) { 
                    // Populate userData object with the user's information
                    for (let j = 0; j < headers.length; j++) {
                        const key = headers[j].trim(); // Get header key
                        const value = values[j].trim(); // Get corresponding value
                        userData[key] = value; // Assign value to corresponding key
                    }
                    break;
                }
            }

            // Populate form fields with retrieved user data
            document.getElementById('username').value = userData['Username'] || '';
            document.getElementById('password').value = userData['Password'] || '';
            document.getElementById('employee').value = userData['Employee ID'] || '';
            document.getElementById('role').value = userData['Role'] || '';
        })
        .catch(error => console.error('Error fetching user data:', error));
}