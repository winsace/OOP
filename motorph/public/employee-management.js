document.addEventListener("DOMContentLoaded", function () {
    const employeeTableBody = document.getElementById("employeeTableBody");
    const createEmployeeBtn = document.getElementById("createEmployeeBtn");
    const searchCriteriaSelect = document.getElementById("searchCriteria");
    const searchTermInput = document.getElementById("searchTerm");
    const searchBtn = document.getElementById("searchBtn");

    // Function to fetch and display employee data
    async function fetchEmployeeData() {
        try {
            const response = await fetch('employeedb.csv');
            if (!response.ok) {
                throw new Error('Failed to fetch employeedb.csv');
            }
            const data = await response.text();
            const rows = data.trim().split('\n').slice(1); // Ignore header row

            // Clear previous data
            employeeTableBody.innerHTML = '';

            rows.forEach(row => {
                const columns = row.split(',');
                const employeeID = columns[0].trim();
                const firstName = columns[1].trim();
                const lastName = columns[2].trim();
                const status = columns[10].trim(); // Assuming the status is in the 11th column

                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td class="px-2 py-2 border">${employeeID}</td>
                    <td class="px-2 py-2 border">${firstName}</td>
                    <td class="px-2 py-2 border">${lastName}</td>
                    <td class="px-2 py-2 border">${status}</td>
                    <td class="px-2 py-2 border"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded view-btn" data-employee-id="${employeeID}">View</button></td>
                `;
                employeeTableBody.appendChild(tr);
            });

            // Attach event listeners to view buttons
            document.querySelectorAll('.view-btn').forEach(button => {
                button.addEventListener('click', function () {
                    const employeeID = this.getAttribute('data-employee-id');
                    window.location.href = `employee-profile.html?employeeID=${employeeID}`;
                });
            });
        } catch (error) {
            console.error('Error fetching or parsing CSV:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    // Event listener for create employee button
    createEmployeeBtn.addEventListener('click', function () {
        window.open('create-employee.html', '_blank', 'width=600,height=400');
    });

    // Event listener for search button
    searchBtn.addEventListener('click', function () {
        const searchCriteria = searchCriteriaSelect.value;
        const searchTerm = searchTermInput.value.trim().toLowerCase();

        if (searchTerm === '') {
            alert('Please enter a search term.');
            return;
        }

        const filteredRows = Array.from(employeeTableBody.children).filter(row => {
            const cellValue = row.querySelector(`td[data-column="${searchCriteria}"]`).innerText.toLowerCase();
            return cellValue.includes(searchTerm);
        });

        if (filteredRows.length === 0) {
            alert('No employee found matching the search criteria.');
            return;
        }

        // Hide all rows
        employeeTableBody.querySelectorAll('tr').forEach(row => {
            row.style.display = 'none';
        });

        // Show filtered rows
        filteredRows.forEach(row => {
            row.style.display = '';
        });
    });

    // Fetch and display employee data on page load
    fetchEmployeeData();
});
