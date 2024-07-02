document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('viewCompensationForm');
    const updateBtn = document.getElementById('updateBtn');
    const resetBtn = document.getElementById('resetBtn');

    let compensationData = {}; // Variable to store compensation data

    // Function to fetch compensation details by employee ID
    async function fetchCompensationData(employeeID) {
        try {
            const response = await fetch(`/compensations/${employeeID}`);
            if (!response.ok) {
                throw new Error('Failed to fetch compensation details');
            }
            const data = await response.json();
            compensationData = data;
            populateForm(compensationData); // Populate form with compensation data
        } catch (error) {
            console.error('Error fetching compensation details:', error);
            alert('An error occurred while fetching compensation details.');
        }
    }

    // Function to populate form with compensation data
    function populateForm(compensation) {
        form.employeeID.value = compensation.employeeID;
        form.basicSalary.value = compensation.basicSalary;
        form.riceSubsidy.value = compensation.riceSubsidy;
        form.phoneAllowance.value = compensation.phoneAllowance;
        form.clothingAllowance.value = compensation.clothingAllowance;
        enableForm();
    }

    // Function to enable form fields for editing
    function enableForm() {
        form.employeeID.disabled = true;
        form.basicSalary.disabled = false;
        form.riceSubsidy.disabled = false;
        form.phoneAllowance.disabled = false;
        form.clothingAllowance.disabled = false;
        updateBtn.disabled = false;
    }

    // Function to handle form reset
    function handleReset() {
        populateForm(compensationData); // Reset form to original compensation data
    }

    // Function to handle form update
    function handleUpdate() {
        const updatedData = {
            basicSalary: form.basicSalary.value,
            riceSubsidy: form.riceSubsidy.value,
            phoneAllowance: form.phoneAllowance.value,
            clothingAllowance: form.clothingAllowance.value,
        };

        fetch(`/compensations/${form.employeeID.value}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update compensation');
            }
            alert('Compensation updated successfully');
            fetchCompensationData(form.employeeID.value); // Refresh compensation data
        })
        .catch(error => {
            console.error('Error updating compensation:', error);
            alert('An error occurred while updating the compensation.');
        });
    }

    // Attach event listeners
    updateBtn.addEventListener('click', handleUpdate);
    resetBtn.addEventListener('click', handleReset);

    // Fetch compensation data on page load if employeeID is provided in query params
    const urlParams = new URLSearchParams(window.location.search);
    const employeeID = urlParams.get('employeeID');
    if (employeeID) {
        fetchCompensationData(employeeID);
    }
});
