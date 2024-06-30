document.addEventListener("DOMContentLoaded", function () {
    const compensationTableBody = document.getElementById("compensationTableBody");
    const createCompensationBtn = document.getElementById("createCompensationBtn");
    const viewCompensationBtn = document.getElementById("viewCompensationBtn");
    const deleteCompensationBtn = document.getElementById("deleteCompensationBtn");
    const refreshBtn = document.getElementById("refreshBtn");
    const searchInput = document.getElementById("searchInput");

    let compensationData = []; // Variable to store original compensation data

    // Function to fetch and display compensation data
    async function fetchCompensationData() {
        try {
            const response = await fetch('/compensation');
            if (!response.ok) {
                throw new Error('Failed to fetch compensation data');
            }
            const data = await response.json();
            console.log('Fetched compensation data:', data); // Log fetched data

            // Store fetched data
            compensationData = data;
            populateCompensationTable(compensationData); // Populate table with initial data
        } catch (error) {
            console.error('Error fetching compensation data:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    // Function to populate compensation table
    function populateCompensationTable(data) {
        compensationTableBody.innerHTML = '';
        data.forEach(compensation => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="px-2 py-2 border"><input type="checkbox" name="compensationCheckbox" value="${compensation.employeeID}"></td>
                <td class="px-2 py-2 border">${compensation.employeeID}</td>
                <td class="px-2 py-2 border">${compensation.basicSalary}</td>
                <td class="px-2 py-2 border">${compensation.riceSubsidy}</td>
                <td class="px-2 py-2 border">${compensation.phoneAllowance}</td>
                <td class="px-2 py-2 border">${compensation.clothingAllowance}</td>
            `;
            compensationTableBody.appendChild(tr);
        });
    }

    // Function to handle bulk deletion of compensations
    function deleteSelectedCompensations() {
        const checkboxes = document.querySelectorAll('input[name="compensationCheckbox"]:checked');
        if (checkboxes.length === 0) {
            alert('Please select at least one compensation to delete.');
            return;
        }

        const employeeIDs = Array.from(checkboxes).map(cb => cb.value);

        if (confirm(`Are you sure you want to delete ${employeeIDs.length} compensation(s)?`)) {
            fetch('/compensation', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ employeeIDs: employeeIDs })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete compensations');
                }
                alert(`${employeeIDs.length} compensation(s) deleted successfully`);
                fetchCompensationData(); // Refresh compensation data
            })
            .catch(error => {
                console.error('Error deleting compensations:', error);
                alert('An error occurred while deleting the compensations.');
            });
        }
    }

    // Function to filter compensation data based on search input (only by employeeID)
    function filterCompensationData() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const filteredData = compensationData.filter(compensation =>
            compensation.employeeID.toString().toLowerCase().includes(searchTerm)
        );

        populateCompensationTable(filteredData);
    }

    // Event listener for search input
    searchInput.addEventListener('input', function () {
        console.log('Input event triggered');
        filterCompensationData();
    });

    // Event listener for create compensation button
    createCompensationBtn.addEventListener('click', function () {
        window.open('create-compensation.html', '_blank', 'width=600,height=400');
    });

    // Event listener for view compensation button
    viewCompensationBtn.addEventListener('click', function () {
        const checkboxes = document.querySelectorAll('input[name="compensationCheckbox"]:checked');
        if (checkboxes.length !== 1) {
            alert('Please select exactly one compensation to view.');
            return;
        }
        const employeeID = checkboxes[0].value;
        window.open(`view-compensation.html?employeeID=${employeeID}`, '_blank', 'width=600,height=400');
    });

    // Event listener for delete compensation button (bulk delete)
    deleteCompensationBtn.addEventListener('click', function () {
        deleteSelectedCompensations();
    });

    // Event listener for refresh button
    refreshBtn.addEventListener('click', function () {
        fetchCompensationData();
    });

    // Fetch and display compensation data on page load
    fetchCompensationData();
});
