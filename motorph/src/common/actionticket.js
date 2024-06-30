document.addEventListener("DOMContentLoaded", function () {
    const ticketTableBody = document.getElementById("ticketTableBody");
    const searchInput = document.getElementById("searchInput");
    const viewTicketBtn = document.getElementById("viewTicketBtn");

    let selectedTicketID = null;
    let ticketData = [];

    async function fetchTicketData() {
        try {
            const response = await fetch('../database/ticket.csv');
            if (!response.ok) {
                throw new Error('Failed to fetch ticket.csv');
            }
            const data = await response.text();
            const rows = data.trim().split('\n').slice(1); // Ignore header row

            ticketData = [];
            ticketTableBody.innerHTML = '';

            rows.forEach(row => {
                const columns = row.split(',');
                const employeeID = columns[0].trim();
                const ticketID = columns[1].trim();
                const assignTeam = columns[2].trim();
                const severity = columns[3].trim();
                const subject = columns[4].trim();
                const description = columns[5].trim();
                const status = columns[6].trim(); // Extract status from the 6th column

                const ticket = {
                    employeeID,
                    ticketID,
                    assignTeam,
                    severity,
                    subject,
                    description,
                    status // Add status to the ticket object
                };
                ticketData.push(ticket);

                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td class="px-2 py-2 border"><input type="radio" name="ticketRadio" value="${ticketID}"></td>
                    <td class="px-2 py-2 border">${employeeID}</td>
                    <td class="px-2 py-2 border">${ticketID}</td>
                    <td class="px-2 py-2 border">${assignTeam}</td>
                    <td class="px-2 py-2 border">${severity}</td>
                    <td class="px-2 py-2 border">${subject}</td>
                    <td class="px-2 py-2 border">${description}</td>
                    <td class="px-2 py-2 border">${status}</td> <!-- Display status in the table -->
                `;
                ticketTableBody.appendChild(tr);
            });
        } catch (error) {
            console.error('Error fetching or parsing CSV:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    function updateSelectedTicketID() {
        const selectedRadio = document.querySelector('input[name="ticketRadio"]:checked');
        if (selectedRadio) {
            selectedTicketID = selectedRadio.value;
        } else {
            selectedTicketID = null;
        }
    }

    function filterTicketData() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredData = ticketData.filter(ticket =>
            ticket.employeeID.toLowerCase().includes(searchTerm) ||
            ticket.ticketID.toLowerCase().includes(searchTerm) ||
            ticket.assignTeam.toLowerCase().includes(searchTerm) ||
            ticket.severity.toLowerCase().includes(searchTerm) ||
            ticket.subject.toLowerCase().includes(searchTerm) ||
            ticket.description.toLowerCase().includes(searchTerm) ||
            ticket.status.toLowerCase().includes(searchTerm) 
        );

        ticketTableBody.innerHTML = '';

        filteredData.forEach(ticket => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="px-2 py-2 border"><input type="radio" name="ticketRadio" value="${ticket.ticketID}"></td>
                <td class="px-2 py-2 border">${ticket.employeeID}</td>
                <td class="px-2 py-2 border">${ticket.ticketID}</td>
                <td class="px-2 py-2 border">${ticket.assignTeam}</td>
                <td class="px-2 py-2 border">${ticket.severity}</td>
                <td class="px-2 py-2 border">${ticket.subject}</td>
                <td class="px-2 py-2 border">${ticket.description}</td>
                <td class="px-2 py-2 border">${ticket.status}</td>
            `;
            ticketTableBody.appendChild(tr);
        });
    }

    searchInput.addEventListener('input', function() {
        filterTicketData();
    });

    viewTicketBtn.addEventListener('click', function() {
        if (selectedTicketID) {
            const selectedTicket = ticketData.find(ticket => ticket.ticketID === selectedTicketID);
            if (selectedTicket) {
                window.open(`view-ticket.html?ticketID=${selectedTicketID}`, '_blank', 'width=800,height=600');

            } else {
                alert('Please select a ticket.');
            }
        } else {
            alert('Please select a ticket.');
        }
    });

    ticketTableBody.addEventListener('change', function() {
        updateSelectedTicketID();
    });

    fetchTicketData();
});
