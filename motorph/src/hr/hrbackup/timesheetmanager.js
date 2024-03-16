document.addEventListener("DOMContentLoaded", async function () {
    const employeeSelect = document.getElementById("employeeSelect");
    const fromDateInput = document.getElementById("fromDateInput");
    const toDateInput = document.getElementById("toDateInput");
    const searchBtn = document.getElementById("searchBtn");
    const timesheetTable = document.getElementById("timesheetTable");
    const timesheetTableBody = document.getElementById("timesheetTableBody");
    const tableHeader = document.getElementById("tableHeader");

    // Function to fetch timesheet data based on selected employee and date range
    async function fetchTimesheetData() {
        const selectedEmployeeID = employeeSelect.value;
        const fromDate = fromDateInput.value;
        const toDate = toDateInput.value;

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

            rows.forEach((row, index) => {
                const columns = row.split(',');
                if (index === 0) { // First row contains headers
                    tableHeader.innerHTML = ''; // Clear previous header
                    columns.forEach(column => {
                        const th = document.createElement('th');
                        th.textContent = column.trim();
                        tableHeader.appendChild(th);
                    });
                } else {
                    const employeeID = columns[0].trim();
                    const date = columns[1].trim();
                    const timeIn = columns[2].trim();
                    const timeOut = columns[3].trim();
                    const schedule = columns[4].trim();
                    const workedHours = columns[5].trim();
                    const status = columns[6].trim();

                    // Check if the row belongs to the selected employee and falls within the date range
                    const dateParts = date.split('/');
                    const rowDate = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]); // Create a Date object

                    const fromDateParts = fromDate.split('-');
                    const toDateParts = toDate.split('-');
                    const fromDateObj = new Date(fromDateParts[0], fromDateParts[1] - 1, fromDateParts[2]); // Create a Date object
                    const toDateObj = new Date(toDateParts[0], toDateParts[1] - 1, toDateParts[2]); // Create a Date object

                    if (employeeID === selectedEmployeeID && rowDate >= fromDateObj && rowDate <= toDateObj) {
                        dataFound = true;
                        const tr = document.createElement('tr');
                        tr.innerHTML = `
                            <td class="px-4 py-2">${date}</td>
                            <td class="px-4 py-2">${timeIn}</td>
                            <td class="px-4 py-2">${timeOut}</td>
                            <td class="px-4 py-2">${schedule}</td>
                            <td class="px-4 py-2">${workedHours}</td>
                            <td class="px-4 py-2">${status}</td>
                        `;
                        timesheetTableBody.appendChild(tr);
                    }
                }
            });

            // Show the table if data is found
            if (dataFound) {
                timesheetTable.classList.remove('hidden');
            } else {
                alert('No data available for the selected employee and date range.');
            }
        } catch (error) {
            console.error('Error fetching or parsing CSV:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    // Event listener for search button
    searchBtn.addEventListener('click', fetchTimesheetData);

    // Fetch employee IDs and populate the dropdown
    async function fetchEmployeeIDs() {
        try {
            const response = await fetch('../database/timesheet.csv');
            if (!response.ok) {
                throw new Error('Failed to fetch timesheet.csv');
            }
            const data = await response.text();
            const rows = data.trim().split('\n');
            const employeeIDs = new Set(); // Using a Set to avoid duplicates

            rows.forEach((row, index) => {
                if (index > 0) { // Skip the header row
                    const columns = row.split(',');
                    const employeeID = columns[0].trim();
                    employeeIDs.add(employeeID);
                }
            });

            // Populate the dropdown with employee IDs
            employeeIDs.forEach(employeeID => {
                const option = document.createElement('option');
                option.value = employeeID;
                option.textContent = employeeID;
                employeeSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching or parsing CSV:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    // Fetch employee IDs on page load
    fetchEmployeeIDs();
});
