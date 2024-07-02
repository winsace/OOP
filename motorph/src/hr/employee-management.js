document.addEventListener("DOMContentLoaded", function () {
    const employeeTableBody = document.getElementById("employeeTableBody");
    const createEmployeeBtn = document.getElementById("createEmployeeBtn");
    const viewEmployeeBtn = document.getElementById("viewEmployeeBtn");
    const deleteEmployeeBtn = document.getElementById("deleteEmployeeBtn");
    const refreshBtn = document.getElementById("refreshBtn");
    const searchInput = document.getElementById("searchInput");
    const selectAllCheckbox = document.getElementById("selectAll");

    let employeeData = []; // Variable to store original employee data

    // Function to fetch and display employee data
    async function fetchEmployeeData() {
        try {
            const response = await fetch('/employees');
            if (!response.ok) {
                throw new Error('Failed to fetch employees');
            }
            const data = await response.json();
            console.log('Fetched employee data:', data); // Log fetched data

            // Store fetched data
            employeeData = data;
            populateEmployeeTable(employeeData); // Populate table with initial data
        } catch (error) {
            console.error('Error fetching employees:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    // Function to populate employee table
    function populateEmployeeTable(data) {
        employeeTableBody.innerHTML = '';
        data.forEach(employee => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="px-2 py-2 border"><input type="checkbox" name="employeeCheckbox" value="${employee.employeeID}"></td>
                <td class="px-2 py-2 border">${employee.employeeID}</td>
                <td class="px-2 py-2 border">${employee.firstName}</td>
                <td class="px-2 py-2 border">${employee.lastName}</td>
                <td class="px-2 py-2 border">${employee.status}</td>
            `;
            employeeTableBody.appendChild(tr);
        });
    }

    // Function to filter employee data based on search input
    function filterEmployeeData() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (!searchTerm) {
            // If search input is empty, show all employees
            populateEmployeeTable(employeeData);
            return;
        }

        const filteredData = employeeData.filter(employee => 
            employee.firstName.toLowerCase().includes(searchTerm) ||
            employee.lastName.toLowerCase().includes(searchTerm) ||
            employee.employeeID.toString().toLowerCase().includes(searchTerm) // Ensure employeeID is converted to string for comparison
        );

        populateEmployeeTable(filteredData);
    }

    // Event listener for search input
    searchInput.addEventListener('input', function () {
        console.log('Input event triggered'); // Log when input event is triggered
        filterEmployeeData();
    });

    // Event listener for create employee button
    createEmployeeBtn.addEventListener('click', function () {
        window.open('create-employee.html', '_blank', 'width=600,height=400');
    });

    // Event listener for view employee button
    viewEmployeeBtn.addEventListener('click', function () {
        const selectedCheckboxes = document.querySelectorAll('input[name="employeeCheckbox"]:checked');
        if (selectedCheckboxes.length !== 1) {
            alert('Please select exactly one employee to view.');
            return;
        }
        const employeeID = selectedCheckboxes[0].value;
        window.open(`viewprofile.html?employeeID=${employeeID}`, '_blank', 'width=600,height=400');
    });

    // Event listener for delete employee button
    deleteEmployeeBtn.addEventListener('click', function () {
        const selectedCheckboxes = document.querySelectorAll('input[name="employeeCheckbox"]:checked');
        if (selectedCheckboxes.length === 0) {
            alert('Please select at least one employee to delete.');
            return;
        }
        const employeeIDs = Array.from(selectedCheckboxes).map(cb => cb.value);
        
        // Confirm deletion
        if (confirm(`Are you sure you want to delete ${employeeIDs.length} employee(s)?`)) {
            fetch('/employees', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ employeeIDs })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete employees');
                }
                alert(`${employeeIDs.length} employee(s) deleted successfully`);
                fetchEmployeeData(); // Refresh employee data
            })
            .catch(error => {
                console.error('Error deleting employees:', error);
                alert('An error occurred while deleting the employees.');
            });
        }
    });

    // Event listener for refresh button
    refreshBtn.addEventListener('click', function () {
        fetchEmployeeData();
    });

    // Event listener for select all checkbox
    selectAllCheckbox.addEventListener('change', function () {
        const checkboxes = document.querySelectorAll('input[name="employeeCheckbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
    });

    // Fetch and display employee data on page load
    fetchEmployeeData();
});
