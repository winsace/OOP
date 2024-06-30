document.addEventListener("DOMContentLoaded", function () {
    const employeeIDInput = document.getElementById("employeeID");
    const lastNameInput = document.getElementById("lastName");
    const firstNameInput = document.getElementById("firstName");
    const birthdayInput = document.getElementById("birthday");
    const addressInput = document.getElementById("address");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const sssInput = document.getElementById("sss");
    const philhealthInput = document.getElementById("philhealth");
    const tinInput = document.getElementById("tin");
    const pagibigInput = document.getElementById("pagibig");
    const statusInput = document.getElementById("status");
    const positionInput = document.getElementById("position");
    const immediateSupervisorInput = document.getElementById("immediateSupervisor");
    const updateBtn = document.getElementById("updateBtn");
    const resetBtn = document.getElementById("resetBtn");
    const message = document.getElementById("message");

    async function fetchEmployeeData() {
        const urlParams = new URLSearchParams(window.location.search);
        const employeeID = urlParams.get('employeeID');
        const endpoint = `/employees/${employeeID}`;

        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error('Failed to fetch employee data');
            }
            const data = await response.json();
            console.log('Fetched employee data:', data);

            // Populate form fields with fetched data
            employeeIDInput.value = data.employeeID;
            lastNameInput.value = data.lastName;
            firstNameInput.value = data.firstName;
            birthdayInput.value = data.birthday;
            addressInput.value = data.address;
            phoneNumberInput.value = data.phoneNumber;
            sssInput.value = data.sss;
            philhealthInput.value = data.philhealth;
            tinInput.value = data.tin;
            pagibigInput.value = data.pagibig;
            statusInput.value = data.status;
            positionInput.value = data.position;
            immediateSupervisorInput.value = data.immediateSupervisor;

            // Disable editing for Employee ID
            employeeIDInput.setAttribute('readonly', 'readonly');
            employeeIDInput.setAttribute('disabled', 'disabled');

            // Enable form fields for editing
            enableFormEditing();
        } catch (error) {
            console.error('Error fetching employee data:', error);
            alert('Failed to fetch employee data');
        }
    }

    function enableFormEditing() {
        const inputs = document.querySelectorAll('#viewProfileForm input:not(#employeeID), #viewProfileForm select');
        inputs.forEach(input => {
            input.removeAttribute('readonly');
            input.removeAttribute('disabled');
        });

        updateBtn.textContent = 'Update';
        updateBtn.classList.remove('bg-gray-500');
        updateBtn.classList.add('bg-green-500');
    }

    updateBtn.addEventListener('click', async () => {
        const employeeID = employeeIDInput.value;
        const lastName = lastNameInput.value;
        const firstName = firstNameInput.value;
        const birthday = birthdayInput.value;
        const address = addressInput.value;
        const phoneNumber = phoneNumberInput.value;
        const sss = sssInput.value;
        const philhealth = philhealthInput.value;
        const tin = tinInput.value;
        const pagibig = pagibigInput.value;
        const status = statusInput.value;
        const position = positionInput.value;
        const immediateSupervisor = immediateSupervisorInput.value;

        const data = {
            lastName,
            firstName,
            birthday,
            address,
            phoneNumber,
            sss,
            philhealth,
            tin,
            pagibig,
            status,
            position,
            immediateSupervisor
        };

        try {
            const response = await fetch(`/employees/${employeeID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to update employee data');
            }

            alert('Employee data updated successfully');
        } catch (error) {
            console.error('Error updating employee data:', error);
            alert('Failed to update employee data');
        }
    });

    resetBtn.addEventListener('click', () => {
        fetchEmployeeData();
    });

    fetchEmployeeData();
});
