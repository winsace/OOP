document.addEventListener("DOMContentLoaded", function () {
    const userTableBody = document.getElementById("userTableBody");
    const createUserBtn = document.getElementById("createUserBtn");
    const viewUserBtn = document.getElementById("viewUserBtn");
    const bulkDeleteBtn = document.getElementById("bulkDeleteBtn");
    const refreshBtn = document.getElementById("refreshBtn");
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

    function populateUserTable(data) {
        // Sort data by employee_id
        data.sort((a, b) => {
            return a.employee_id - b.employee_id;
        });
    
        userTableBody.innerHTML = '';
        data.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="px-2 py-2 border"><input type="checkbox" name="userCheckbox" value="${user.username}"></td>
                <td class="px-2 py-2 border">${user.username}</td>
                <td class="px-2 py-2 border">${'*'.repeat(user.password.length)}</td>
                <td class="px-2 py-2 border">${user.employee_id}</td>
                <td class="px-2 py-2 border">${user.role}</td>
            `;
            userTableBody.appendChild(tr);
        });
    }

    // Function to delete selected users
    function deleteSelectedUsers() {
        const checkboxes = document.querySelectorAll('input[name="userCheckbox"]:checked');
        if (checkboxes.length === 0) {
            alert('Please select users to delete.');
            return;
        }
        
        const usernames = Array.from(checkboxes).map(checkbox => checkbox.value);

        // Confirm deletion
        if (confirm(`Are you sure you want to delete ${usernames.length} user(s)?`)) {
            usernames.forEach(username => {
                fetch(`/users/${username}`, {
                    method: 'DELETE',
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to delete user "${username}"`);
                    }
                    // Optionally handle success response here
                })
                .catch(error => {
                    console.error(`Error deleting user "${username}":`, error);
                    alert(`An error occurred while deleting user "${username}".`);
                });
            });

            // Refresh user data after deletion
            fetchUserData();
        }
    }

    // Function to handle search filtering
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
    searchInput.addEventListener('input', function () {
        filterUserData();
    });

    // Event listener for create user button
    createUserBtn.addEventListener('click', function () {
        window.open('create-user.html', '_blank', 'width=600,height=400');
    });

    // Event listener for view user button
    viewUserBtn.addEventListener('click', function () {
        const checkboxes = document.querySelectorAll('input[name="userCheckbox"]:checked');
        if (checkboxes.length !== 1) {
            alert('Please select exactly one user to view.');
            return;
        }
        const username = checkboxes[0].value;
        window.open(`view-user.html?username=${username}`, '_blank', 'width=600,height=400');
    });

    // Event listener for bulk delete button
    bulkDeleteBtn.addEventListener('click', function () {
        deleteSelectedUsers();
    });

    // Event listener for refresh button
    refreshBtn.addEventListener('click', function () {
        fetchUserData();
    });

    // Fetch and display user data on page load
    fetchUserData();
});
