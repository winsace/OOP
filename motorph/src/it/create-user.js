document.addEventListener("DOMContentLoaded", function () {
    const createUserForm = document.getElementById("createUserForm");
    const userFormContainer = document.getElementById("userFormContainer");
    const addRowBtn = document.getElementById("addRowBtn");

    // Function to create a new form row
    function createFormRow() {
        const formRow = document.createElement("div");
        formRow.className = "flex flex-wrap mb-4 relative"; // Added 'relative' for positioning
        formRow.innerHTML = `
            <div class="absolute top-0 left-0 mt-6 ml-2">
                <button type="button" class="text-red-500 hover:text-red-700 focus:outline-none removeRowBtn">
                    <i class="fas fa-minus-circle"></i>
                </button>
            </div>
            <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" type="text" required>
            </div>
            <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" type="text" required>
            </div>
            <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="employee">Employee ID:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="employee_id" type="number" min="1" required>
            </div>
            <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="role">Role:</label>
                <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="role" required>
                    <option value="">Select Role</option>
                    <option value="it">IT</option>
                    <option value="hr">HR</option>
                    <option value="employee">Employee</option>
                    <option value="payroll">Payroll</option>
                </select>
            </div>
        `;
        userFormContainer.appendChild(formRow);

        // Add event listener to the new remove button
        const removeRowBtn = formRow.querySelector(".removeRowBtn");
        removeRowBtn.addEventListener("click", function () {
            userFormContainer.removeChild(formRow);
        });
    }

    // Initial add row button click event
    addRowBtn.addEventListener("click", createFormRow);

    createUserForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formDataArray = Array.from(userFormContainer.querySelectorAll(".flex.flex-wrap.mb-4"));
        const formData = formDataArray.map(formRow => {
            const username = formRow.querySelector('input[name="username"]').value.trim();
            const password = formRow.querySelector('input[name="password"]').value.trim();
            const employeeID = formRow.querySelector('input[name="employee_id"]').value.trim();
            const role = formRow.querySelector('select[name="role"]').value.trim();
            return { username, password, employee_id: employeeID, role };
        });

        // Password validation regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // Validate passwords
        for (const user of formData) {
            if (!passwordRegex.test(user.password)) {
                alert("Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*?&)");
                return;
            }
        }

        // Submit the form data
        fetch('/users/create-batch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ users: formData }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create users');
            }
            alert('Users created successfully');
            createUserForm.reset(); // Reset the form
            userFormContainer.innerHTML = ''; // Clear added form rows
            window.close(); // Close the window after successful creation
        })
        .catch(error => {
            console.error('Error creating users:', error);
            alert('An error occurred while creating the users.');
        });
    });

    // Reset form button
    const resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", function () {
        createUserForm.reset();
        userFormContainer.innerHTML = ''; // Clear added form rows
    });

    // Event delegation for dynamically added remove buttons
    userFormContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("removeRowBtn")) {
            const formRow = event.target.closest(".flex.flex-wrap.mb-4");
            if (formRow) {
                userFormContainer.removeChild(formRow);
            }
        }
    });
});
