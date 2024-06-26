document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('viewUserForm');
    const updateBtn = document.getElementById('updateBtn');
    const resetBtn = document.getElementById('resetBtn');

    let userData = {}; // Variable to store user data

    // Function to fetch user details by username
    async function fetchUserData(username) {
        try {
            const response = await fetch(`/users/${username}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user details');
            }
            const data = await response.json();
            userData = data;
            populateForm(userData); // Populate form with user data
        } catch (error) {
            console.error('Error fetching user details:', error);
            alert('An error occurred while fetching user details.');
        }
    }

    // Function to populate form with user data
    function populateForm(user) {
        form.username.value = user.username;
        form.password.value = user.password;
        form.employee_id.value = user.employee_id;
        form.role.value = user.role;
        enableForm();
    }

    // Function to enable form fields for editing
    function enableForm() {
        form.username.disabled = false;
        form.password.disabled = false;
        form.employee_id.disabled = false;
        form.role.disabled = false;
        updateBtn.disabled = false;
    }

    // Function to handle form reset
    function handleReset() {
        populateForm(userData); // Reset form to original user data
    }

    // Function to handle form update
    function handleUpdate() {
        const updatedData = {
            username: form.username.value,
            password: form.password.value,
            employee_id: form.employee_id.value,
            role: form.role.value,
        };

        fetch(`/users/${updatedData.username}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update user');
            }
            alert('User updated successfully');
            fetchUserData(updatedData.username); // Refresh user data
        })
        .catch(error => {
            console.error('Error updating user:', error);
            alert('An error occurred while updating the user.');
        });
    }

    // Attach event listeners
    updateBtn.addEventListener('click', handleUpdate);
    resetBtn.addEventListener('click', handleReset);

    // Fetch user data on page load
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
        fetchUserData(username);
    }
});
