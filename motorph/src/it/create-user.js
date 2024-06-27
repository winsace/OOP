document.addEventListener("DOMContentLoaded", function () {
    const createUserForm = document.getElementById("createUserForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const employeeInput = document.getElementById("employee");
    const roleInput = document.getElementById("role");

    createUserForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const employeeID = employeeInput.value.trim();
        const role = roleInput.value.trim();

        // Password validation regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*?&)");
            return;
        }

        // Form data object
        const formData = {
            username: username,
            password: password,
            employee_id: employeeID,
            role: role
        };

        // Submit the form data
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create user');
            }
            alert('User created successfully');
            createUserForm.reset(); // Reset the form
        })
        .catch(error => {
            console.error('Error creating user:', error);
            alert('An error occurred while creating the user.');
        });
    });

    // Reset form button
    const resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", function () {
        createUserForm.reset();
    });
});
