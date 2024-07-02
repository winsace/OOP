document.addEventListener('DOMContentLoaded', function () {
    const createEmployeeForm = document.getElementById('createEmployeeForm');
    const employeeFormContainer = document.getElementById('employeeFormContainer');
    const addRowBtn = document.getElementById('addRowBtn');

    // Function to create a new form row
    function createFormRow() {
        const formRow = document.createElement('div');
        formRow.className = 'form-line relative mb-4'; // Added 'relative' for positioning
        formRow.innerHTML = `
            <div class="absolute top-0 left-0 mt-6 ml-2">
                <button type="button" class="text-red-500 hover:text-red-700 focus:outline-none removeRowBtn">
                    <i class="fas fa-minus-circle"></i>
                </button>
            </div>
            <!-- First Line -->
            <div class="form-field">
                <label class="form-label block text-gray-700 text-sm font-bold mb-2" for="employeeID">Employee ID:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="employeeID" type="number" min="1" required>
            </div>
            <div class="form-field">
                <label class="form-label block text-gray-700 text-sm font-bold mb-2" for="lastName">Last Name:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="lastName" type="text" required>
            </div>
            <div class="form-field">
                <label class="form-label block text-gray-700 text-sm font-bold mb-2" for="firstName">First Name:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="firstName" type="text" required>
            </div>
            <!-- Second Line -->
            <div class="form-field">
                <label class="form-label block text-gray-700 text-sm font-bold mb-2" for="birthday">Birthday:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="birthday" type="date" required>
            </div>
            <div class="form-field">
                <label class="form-label block text-gray-700 text-sm font-bold mb-2" for="address">Address:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="address" type="text" required>
            </div>
            <div class="form-field">
                <label class="form-label block text-gray-700 text-sm font-bold mb-2" for="phoneNumber">Phone Number:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="phoneNumber" type="text" required>
            </div>
            <!-- Third Line -->
            <div class="form-field">
                <label class="form-label block text-gray-700 text-sm font-bold mb-2" for="sss">SSS:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="sss" type="text" required>
            </div>
            <div class="form-field">
                <label class="form-label block text-gray-700 text-sm font-bold mb-2" for="philhealth">PhilHealth:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="philhealth" type="text" required>
            </div>
            <div class="form-field">
                <label class="form-label block text-gray-700 text-sm font-bold mb-2" for="tin">TIN:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="tin" type="text" required>
            </div>
            <!-- Fourth Line -->
            <div class="form-field">
                <label class="form-label block text-gray-700 text-sm font-bold mb-2" for="pagibig">Pag-IBIG:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="pagibig" type="text" required>
            </div>
            <div class="form-field">
                <label class="form-label block text-gray-700 text-sm font-bold mb-2" for="status">Status:</label>
                <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="status" required>
                    <option value="">Select Status</option>
                    <option value="Regular">Regular</option>
                    <option value="Probationary">Probationary</option>
                </select>
            </div>
            <div class="form-field">
                <label class="form-label block text-gray-700 text-sm font-bold mb-2" for="position">Position:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="position" type="text" required>
            </div>
            <!-- Fifth Line -->
            <div class="form-field">
                <label class="form-label block text-gray-700 text-sm font-bold mb-2" for="immediateSupervisor">Supervisor:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="immediateSupervisor" type="text" required>
            </div>
        `;
        employeeFormContainer.appendChild(formRow);

        // Add event listener to the new remove button
        const removeRowBtn = formRow.querySelector('.removeRowBtn');
        removeRowBtn.addEventListener('click', function () {
            employeeFormContainer.removeChild(formRow);
        });
    }

    // Initial add row button click event
    addRowBtn.addEventListener('click', createFormRow);

    createEmployeeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formDataArray = Array.from(employeeFormContainer.querySelectorAll('.form-line'));
        const formData = formDataArray.map(formRow => {
            const employeeID = formRow.querySelector('input[name="employeeID"]').value.trim();
            const lastName = formRow.querySelector('input[name="lastName"]').value.trim();
            const firstName = formRow.querySelector('input[name="firstName"]').value.trim();
            const birthday = formRow.querySelector('input[name="birthday"]').value.trim();
            const address = formRow.querySelector('input[name="address"]').value.trim();
            const phoneNumber = formRow.querySelector('input[name="phoneNumber"]').value.trim();
            const sss = formRow.querySelector('input[name="sss"]').value.trim();
            const philhealth = formRow.querySelector('input[name="philhealth"]').value.trim();
            const tin = formRow.querySelector('input[name="tin"]').value.trim();
            const pagibig = formRow.querySelector('input[name="pagibig"]').value.trim();
            const status = formRow.querySelector('select[name="status"]').value.trim();
            const position = formRow.querySelector('input[name="position"]').value.trim();
            const immediateSupervisor = formRow.querySelector('input[name="immediateSupervisor"]').value.trim();

            return {
                employeeID,
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
        });

        // Submit the form data
        fetch('http://localhost:3000/employees/create-batch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ employees: formData }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create employees');
            }
            alert('Employees created successfully');
            createEmployeeForm.reset(); // Reset the form
            employeeFormContainer.innerHTML = ''; // Clear added form rows
        })
        .catch(error => {
            console.error('Error creating employees:', error);
            alert('An error occurred while creating the employees.');
        });
    });

    // Reset form button
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', function () {
        createEmployeeForm.reset();
        employeeFormContainer.innerHTML = ''; // Clear added form rows
    });

    // Event delegation for dynamically added remove buttons
    employeeFormContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('removeRowBtn')) {
            const formRow = event.target.closest('.form-line');
            if (formRow) {
                employeeFormContainer.removeChild(formRow);
            }
        }
    });
});
