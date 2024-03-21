document.addEventListener("DOMContentLoaded", function () {
    // Retrieve ticket ID from URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const ticketID = urlParams.get('ticketID');

    // Elements
    const employeeIDInput = document.getElementById("employeeID");
    const ticketIDInput = document.getElementById("ticketID");
    const assignTeamInput = document.getElementById("assignTeam");
    const severityInput = document.getElementById("severity");
    const subjectInput = document.getElementById("subject");
    const descriptionTextarea = document.getElementById("description");
    const statusSelect = document.getElementById("status");
    const updateBtn = document.getElementById("updateBtn");
    const closeBtn = document.getElementById("closeBtn");

    // Function to fetch and display ticket data
    async function fetchAndDisplayTicketData() {
        try {
            const response = await fetch('../database/ticket.csv');
            if (!response.ok) {
                throw new Error('Failed to fetch ticket.csv');
            }
            const data = await response.text();
            const rows = data.trim().split('\n').slice(1); // Ignore header row

            const ticket = rows.find(row => {
                const columns = row.split(',');
                return columns[1].trim() === ticketID;
            });

            if (ticket) {
                const columns = ticket.split(',');
                employeeIDInput.value = columns[0].trim();
                ticketIDInput.value = columns[1].trim();
                assignTeamInput.value = columns[2].trim();
                severityInput.value = columns[3].trim();
                subjectInput.value = columns[4].trim();
                descriptionTextarea.value = columns[5].trim();
                statusSelect.value = columns[6].trim();
            } else {
                alert('Ticket not found.');
            }
        } catch (error) {
            console.error('Error fetching or parsing CSV:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    // Update button event listener
    updateBtn.addEventListener('click', function() {
        // Perform update operation here
        alert('Update Successful');
    });

    // Close button event listener
    closeBtn.addEventListener('click', function() {
        // Close the window
        window.close();
    });

    // Fetch and display ticket data
    fetchAndDisplayTicketData();
});
