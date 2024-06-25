document.addEventListener("DOMContentLoaded", async function () {
    const employeeSelect = document.getElementById("employeeSelect"); // Not used, as only one employee is selected by default
    const startDateInput = document.getElementById("startDateInput");
    const endDateInput = document.getElementById("endDateInput");
    const searchBtn = document.getElementById("searchBtn");
    const leaveTableBody = document.getElementById("leaveTableBody");

    // Function to fetch leave data for the default selected employee and specified date range
    async function fetchLeaveData() {
        // Check if start date and end date are selected
        if (!startDateInput.value || !endDateInput.value) {
            alert("Please select both start and end dates.");
            return;
        }

        // Default selected employee ID
        const selectedEmployeeID = "3"; // Default to employee 3
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);

        // Adjust startDate to include the entire day
        startDate.setHours(0, 0, 0, 0);

        // Adjust endDate to include the entire day
        endDate.setHours(23, 59, 59, 999);

        try {
            const response = await fetch('../database/leave.csv');
            if (!response.ok) {
                throw new Error('Failed to fetch leave.csv');
            }
            const data = await response.text();
            const rows = data.trim().split('\n');

            // Clear previous data
            leaveTableBody.innerHTML = '';

            let dataFound = false;

            rows.forEach(row => {
                const columns = row.split(',');
                const employeeID = columns[0].trim();
                const leaveStartDate = new Date(columns[1].trim()); // Parse startDate as Date object
                const leaveEndDate = new Date(columns[2].trim()); // Parse endDate as Date object
                const leaveType = columns[3].trim();
                const reason = columns[4].trim();
                const status = columns[5].trim();

                // Check if the row belongs to the selected employee and falls within the date range
                if (employeeID === selectedEmployeeID && leaveStartDate >= startDate && leaveEndDate <= endDate) {
                    dataFound = true;
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${employeeID}</td>
                        <td>${leaveStartDate.toLocaleDateString()}</td>
                        <td>${leaveEndDate.toLocaleDateString()}</td>
                        <td>${leaveType}</td>
                        <td>${reason}</td>
                        <td>${status}</td>
                    `;
                    leaveTableBody.appendChild(row);
                }
            });

            // Show message if no data found
            if (!dataFound) {
                alert('No data available for the selected employee and date range.');
            }
        } catch (error) {
            console.error('Error fetching or parsing CSV:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    // Event listener for search button
    searchBtn.addEventListener('click', fetchLeaveData);
});
