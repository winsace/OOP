document.addEventListener("DOMContentLoaded", function () {
    const userTableBody = document.getElementById("userTableBody");
    const createUserBtn = document.getElementById("createUserBtn");
    const viewUserBtn = document.getElementById("viewUserBtn");
    const deleteUserBtn = document.getElementById("deleteUserBtn");
    const searchInput = document.getElementById("searchInput");

    let userData = []; // Variable to store original user data

    // Function to fetch and display user data
    async function fetchUserData() {
        try {
            const response = await fetch('/users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();

            // Store fetched data
            userData = data;
            populateUserTable(userData); // Populate table with initial data
        } catch (error) {
            console.error('Error fetching users:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    // Function to populate user table
    function populateUserTable(data) {
        userTableBody.innerHTML = '';
        data.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="px-2 py-2 border"><input type="radio" name="userRadio" value="${user.username}"></td>
                <td class="px-2 py-2 border">${user.username}</td>
                <td class="px-2 py-2 border">${user.password}</td>
                <td class="px-2 py-2 border">${user.employee_id}</td>
                <td class="px-2 py-2 border">${user.role}</td>
            `;
            userTableBody.appendChild(tr);
        });
    }

    // Function to filter user data based on search input
    function filterUserData() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (!searchTerm) {
            // If search input is empty, show all users
            populateUserTable(userData);
            return;
        }

        const filteredData = userData.filter(user => 
            user.username.toLowerCase().includes(searchTerm) ||
            user.employee_id.toString().toLowerCase().includes(searchTerm) ||
            user.role.toLowerCase().includes(searchTerm)
        );

        populateUserTable(filteredData);
    }

    // Event listener for search input
    searchInput.addEventListener('input', filterUserData);

    // Event listener for create user button
    createUserBtn.addEventListener('click', function () {
        window.open('create-user.html', '_blank', 'width=600,height=400');
    });

    // Event listener for view user button
    viewUserBtn.addEventListener('click', function () {
        const selectedRadio = document.querySelector('input[name="userRadio"]:checked');
        if (!selectedRadio) {
            alert('Please select a user to view.');
            return;
        }
        const username = selectedRadio.value;
        window.open(`view-user.html?username=${username}`, '_blank', 'width=600,height=400');
    });

    // Event listener for delete user button
    deleteUserBtn.addEventListener('click', function () {
        const selectedRadio = document.querySelector('input[name="userRadio"]:checked');
        if (!selectedRadio) {
            alert('Please select a user to delete.');
            return;
        }
        const username = selectedRadio.value;
        
        // Confirm deletion
        if (confirm(`Are you sure you want to delete user "${username}"?`)) {
            fetch(`/users/${username}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete user');
                }
                alert(`User "${username}" deleted successfully`);
                fetchUserData(); // Refresh user data
            })
            .catch(error => {
                console.error('Error deleting user:', error);
                alert('An error occurred while deleting the user.');
            });
        }
    });

    // Fetch and display user data on page load
    fetchUserData();
});
