document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('createEmployeeForm');
    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');
    const messageDiv = document.getElementById('message');

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission
        if (validateForm()) {
            const formData = new FormData(form); // Get form data

            // Convert form data to JSON format
            const jsonData = {};
            formData.forEach((value, key) => {
                jsonData[key] = value;
            });

            // Save the data
            saveData(jsonData);
        }
    }

    // Function to validate form fields
    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll('input, select');

        inputs.forEach(input => {
            if (input.hasAttribute('required') && input.value.trim() === '') {
                isValid = false;
                input.classList.add('border-red-500'); // Add red border for visual feedback
            } else {
                input.classList.remove('border-red-500');
            }
        });

        if (!isValid) {
            messageDiv.textContent = 'Please fill in all required fields.';
        } else {
            messageDiv.textContent = '';
        }

        return isValid;
    }

    // Function to handle form reset
    function handleReset() {
        form.reset(); // Reset the form
        // Clear message
        messageDiv.textContent = '';
        // Reset input styles
        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.classList.remove('border-red-500');
        });
    }

    // Attach event listeners
    form.addEventListener('submit', handleSubmit);
    resetBtn.addEventListener('click', handleReset);
});

// Function to save data
function saveData(data) {
    fetch('http://localhost:3000/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create employee');
        }
        return response.json();
    })
    .then(result => {
        console.log('Employee created successfully:', result);
        alert('Employee created successfully!');
        document.getElementById('message').textContent = ''; // Clear any previous message
        document.getElementById('createEmployeeForm').reset(); // Reset the form
    })
    .catch(error => {
        console.error('Error creating employee:', error);
        alert('An error occurred while creating the employee.');
    });
}
