document.addEventListener("DOMContentLoaded", function () {
    const employeeTableBody = document.getElementById("employeeTableBody");
    const createEmployeeBtn = document.getElementById("createEmployeeBtn");
    const viewEmployeeBtn = document.getElementById("viewEmployeeBtn");
    const deleteEmployeeBtn = document.getElementById("deleteEmployeeBtn");

    // Function to fetch and display employee data
    async function fetchEmployeeData() {
        try {
            const response = await fetch('../database/employeedb.csv');
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
                    <td class="px-2 py-2 border"><input type="radio" name="employeeRadio" value="${employeeID}"></td>
                    <td class="px-2 py-2 border">${employeeID}</td>
                    <td class="px-2 py-2 border">${firstName}</td>
                    <td class="px-2 py-2 border">${lastName}</td>
                    <td class="px-2 py-2 border">${status}</td>
                `;
                employeeTableBody.appendChild(tr);
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

    // Event listener for view employee button
    viewEmployeeBtn.addEventListener('click', function () {
        const selectedRadio = document.querySelector('input[name="employeeRadio"]:checked');
        if (!selectedRadio) {
            alert('Please select an employee to view.');
            return;
        }
        const employeeID = selectedRadio.value;
        window.open(`viewprofile.html?employeeID=${employeeID}`, '_blank', 'width=600,height=400');
    });

    // Event listener for delete employee button
    deleteEmployeeBtn.addEventListener('click', function () {
        const selectedRadio = document.querySelector('input[name="employeeRadio"]:checked');
        if (!selectedRadio) {
            alert('Please select an employee to delete.');
            return;
        }
        const employeeID = selectedRadio.value;
        // Implement delete functionality
        // Example: send request to delete employee with ID employeeID
    });

    // Fetch and display employee data on page load
    fetchEmployeeData();
});
