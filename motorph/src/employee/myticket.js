document.addEventListener("DOMContentLoaded", async function () {
    const employeeSelect = document.getElementById("employeeSelect"); // Not used, as only one employee is selected by default
    const statusSelect = document.getElementById("statusSelect");
    const searchBtn = document.getElementById("searchBtn");
    const ticketTableBody = document.getElementById("ticketTableBody");

    // Function to fetch ticket data for the default selected employee and specified status
    async function fetchTicketData() {
        // Default selected employee ID
        const selectedEmployeeID = "1"; // Default to employee 1
        const selectedStatus = statusSelect.value;

        try {
            const response = await fetch('../database/ticket.csv');
            if (!response.ok) {
                throw new Error('Failed to fetch ticket.csv');
            }
            const data = await response.text();
            const rows = data.trim().split('\n');

            // Clear previous data
            ticketTableBody.innerHTML = '';

            let dataFound = false;

            rows.forEach(row => {
                const columns = row.split(',');
                const employeeID = columns[0].trim();
                const ticketID = columns[1].trim();
                const assignTeam = columns[2].trim();
                const severity = columns[3].trim();
                const subject = columns[4].trim();
                const description = columns[5].trim();
                const status = columns[6].trim();

                // Check if the row belongs to the selected employee and matches the selected status
                if (employeeID === selectedEmployeeID && (selectedStatus === "All" || status === selectedStatus)) {
                    dataFound = true;
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${employeeID}</td>
                        <td>${ticketID}</td>
                        <td>${assignTeam}</td>
                        <td>${severity}</td>
                        <td>${subject}</td>
                        <td>${description}</td>
                        <td>${status}</td>
                    `;
                    ticketTableBody.appendChild(row);
                }
            });

            // Show message if no data found
            if (!dataFound) {
                alert('No tickets available for the selected employee and status.');
            }
        } catch (error) {
            console.error('Error fetching or parsing CSV:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    // Event listener for search button
    searchBtn.addEventListener('click', fetchTicketData);

    // Fetch ticket data initially on page load
    fetchTicketData();
});
