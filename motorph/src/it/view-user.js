document.addEventListener('DOMContentLoaded', function () {
    // Extract username from URL
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    // Fetch user data using the extracted username
    fetchUserData(username);

    // Event listener for update button
    document.getElementById('updateBtn').addEventListener('click', function () {
        const password = document.getElementById('password').value;
        const employee = document.getElementById('employee').value;
        const role = document.getElementById('role').value;

        fetch(`/users/${username}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password, employee, role }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update user');
            }
            alert(`User "${username}" updated successfully`);
        })
        .catch(error => {
            console.error('Error updating user:', error);
            alert('An error occurred while updating the user.');
        });
    });

    // Event listener for close button
    document.getElementById('closeBtn').addEventListener('click', function () {
        window.close(); // Close the pop-up window
    });

    function fetchUserData(username) {
        fetch(`/users/${username}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                return response.json();
            })
            .then(user => {
                // Populate form fields with retrieved user data
                document.getElementById('username').value = user.username || '';
                document.getElementById('password').value = user.password || '';
                document.getElementById('employee').value = user.employee_id || '';
                document.getElementById('role').value = user.role || '';
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                alert('An error occurred while fetching user data.');
            });
    }
});
