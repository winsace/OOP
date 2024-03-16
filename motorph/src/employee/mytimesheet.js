document.addEventListener("DOMContentLoaded", async function () {
    const employeeID = 1; // Set employee ID to 1 by default
    const fromDateInput = document.getElementById("fromDateInput");
    const toDateInput = document.getElementById("toDateInput");
    const searchBtn = document.getElementById("searchBtn");
    const timesheetTableBody = document.getElementById("timesheetTableBody");

    // Function to fetch timesheet data based on employee ID and date range
    async function fetchTimesheetData() {
        const fromDate = new Date(fromDateInput.value);
        const toDate = new Date(toDateInput.value);

        // Adjust fromDate to include the entire day
        fromDate.setHours(0, 0, 0, 0);

        // Adjust toDate to include the entire day
        toDate.setHours(23, 59, 59, 999);

        try {
            const response = await fetch('../database/timesheet.csv');
            if (!response.ok) {
                throw new Error('Failed to fetch timesheet.csv');
            }
            const data = await response.text();
            const rows = data.trim().split('\n');

            // Clear previous data
            timesheetTableBody.innerHTML = '';

            let dataFound = false;

            // Create table structure dynamically
            const table = document.createElement('table');
            const headerRow = document.createElement('tr');
            const headerColumns = ['Employee ID', 'Date', 'Time In', 'Time Out'];
            headerColumns.forEach(column => {
                const th = document.createElement('th');
                th.textContent = column;
                headerRow.appendChild(th);
            });
            table.appendChild(headerRow);

            rows.forEach(row => {
                const columns = row.split(',');
                const empID = parseInt(columns[0].trim()); // Parse employee ID as integer
                const date = new Date(columns[1].trim()); // Parse date as Date object
                const timeIn = columns[2].trim();
                const timeOut = columns[3].trim();
                const lockValue = parseInt(columns[4].trim()); // Assuming lock value is in the 5th column (index 4)

                // Check if the row belongs to the selected employee and falls within the date range
                if (empID === employeeID && date >= fromDate && date <= toDate && lockValue === 1) {
                    dataFound = true;
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${empID}</td>
                        <td>${date.toLocaleDateString()}</td>
                        <td>${timeIn}</td>
                        <td>${timeOut}</td>
                    `;
                    table.appendChild(row);
                }
            });

            // Append the table to the table body
            timesheetTableBody.appendChild(table);

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
    searchBtn.addEventListener('click', fetchTimesheetData);

    // Fetch timesheet data on page load
    fetchTimesheetData();
});
