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
            const response = await fetch('../database/cred.csv');
            if (!response.ok) {
                throw new Error('Failed to fetch cred.csv');
            }
            const data = await response.text();
            const rows = data.trim().split('\n').slice(1); // Ignore header row

            // Clear previous data
            userData = []; // Clear existing data
            userTableBody.innerHTML = '';

            rows.forEach(row => {
                const columns = row.split(',');
                const username = columns[0].trim();
                const password = columns[1].trim();
                const employee = columns[2].trim();
                const role = columns[3].trim();

                const user = {
                    username,
                    password,
                    employee,
                    role
                };
                userData.push(user);

                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td class="px-2 py-2 border"><input type="radio" name="userRadio" value="${username}"></td>
                    <td class="px-2 py-2 border">${username}</td>
                    <td class="px-2 py-2 border">${password}</td>
                    <td class="px-2 py-2 border">${employee}</td>
                    <td class="px-2 py-2 border">${role}</td>
                `;
                userTableBody.appendChild(tr);
            });
        } catch (error) {
            console.error('Error fetching or parsing CSV:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    // Function to filter user data based on search input
    function filterUserData() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredData = userData.filter(user => 
            user.username.toLowerCase().includes(searchTerm) ||
            user.employee.toLowerCase().includes(searchTerm) ||
            user.role.toLowerCase().includes(searchTerm)
        );

        // Clear existing table rows
        userTableBody.innerHTML = '';

        // Populate table with filtered data
        filteredData.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="px-2 py-2 border"><input type="radio" name="userRadio" value="${user.username}"></td>
                <td class="px-2 py-2 border">${user.username}</td>
                <td class="px-2 py-2 border">${user.password}</td>
                <td class="px-2 py-2 border">${user.employee}</td>
                <td class="px-2 py-2 border">${user.role}</td>
            `;
            userTableBody.appendChild(tr);
        });
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
    // Pass the selected username to the fetchUserData function
    fetchUserData(username);
    // Open view-user.html with parameters
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
        // Implement delete functionality
        // Example: send request to delete user with username
    });

    // Fetch and display user data on page load
    fetchUserData();
});
