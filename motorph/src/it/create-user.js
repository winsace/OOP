document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('createUserForm');
    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(form); // Get form data

        // Convert form data to JSON format
        const jsonData = {};
        for (const [key, value] of formData.entries()) {
            jsonData[key] = value;
        }

        // Save the data
        saveData(jsonData);
    }

    // Function to handle form reset
    function handleReset() {
        form.reset(); // Reset the form
    }

    // Attach event listeners
    form.addEventListener('submit', handleSubmit);
    resetBtn.addEventListener('click', handleReset);
});

// Function to save data
function saveData(data) {
    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create user');
        }
        return response.json();
    })
    .then(result => {
        console.log('User created successfully:', result);
        alert('User created successfully!');
        document.getElementById('createUserForm').reset(); // Reset the form
    })
    .catch(error => {
        console.error('Error creating user:', error);
        alert('An error occurred while creating the user.');
    });
}
