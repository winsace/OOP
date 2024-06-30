document.addEventListener("DOMContentLoaded", function () {
    const createCompensationForm = document.getElementById("createCompensationForm");
    const compensationFormContainer = document.getElementById("compensationFormContainer");
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
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="employee_id">Employee ID:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="employee_id" type="number" min="1" required>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="basic_salary">Basic Salary:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="basic_salary" type="number" min="0" required>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="rice_subsidy">Rice Subsidy:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="rice_subsidy" type="number" min="0" required>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="phone_allowance">Phone Allowance:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="phone_allowance" type="number" min="0" required>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="clothing_allowance">Clothing Allowance:</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="clothing_allowance" type="number" min="0" required>
            </div>
        `;
        compensationFormContainer.appendChild(formRow);

        // Add event listener to the new remove button
        const removeRowBtn = formRow.querySelector(".removeRowBtn");
        removeRowBtn.addEventListener("click", function () {
            compensationFormContainer.removeChild(formRow);
        });
    }

    // Initial add row button click event
    addRowBtn.addEventListener("click", createFormRow);

    createCompensationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formDataArray = Array.from(compensationFormContainer.querySelectorAll(".flex.flex-wrap.mb-4"));
        const formData = formDataArray.map(formRow => {
            const employeeID = formRow.querySelector('input[name="employee_id"]').value.trim();
            const basicSalary = formRow.querySelector('input[name="basic_salary"]').value.trim();
            const riceSubsidy = formRow.querySelector('input[name="rice_subsidy"]').value.trim();
            const phoneAllowance = formRow.querySelector('input[name="phone_allowance"]').value.trim();
            const clothingAllowance = formRow.querySelector('input[name="clothing_allowance"]').value.trim();
            return { employee_id: employeeID, basic_salary: basicSalary, rice_subsidy: riceSubsidy, phone_allowance: phoneAllowance, clothing_allowance: clothingAllowance };
        });

        // Submit the form data
        fetch('/compensations/create-batch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ compensations: formData }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create compensations');
            }
            alert('Compensations created successfully');
            createCompensationForm.reset(); // Reset the form
            compensationFormContainer.innerHTML = ''; // Clear added form rows
            window.close(); // Close the window
        })
        .catch(error => {
            console.error('Error creating compensations:', error);
            alert('An error occurred while creating the compensations.');
        });
    });

    // Reset form button
    const resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", function () {
        createCompensationForm.reset();
        compensationFormContainer.innerHTML = ''; // Clear added form rows
    });

    // Event delegation for dynamically added remove buttons
    compensationFormContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("removeRowBtn")) {
            const formRow = event.target.closest(".flex.flex-wrap.mb-4");
            if (formRow) {
                compensationFormContainer.removeChild(formRow);
            }
        }
    });
});
