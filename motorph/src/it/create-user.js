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

        // Reset the form after submission
        form.reset();
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
    // You can implement saving data to a database or file here
    console.log('Data saved:', data);
}
