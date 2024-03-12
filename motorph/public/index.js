document.addEventListener("DOMContentLoaded", function() {
    // Get the login button and role select element
    const loginButton = document.getElementById("loginButton");
    const roleSelect = document.getElementById("roleSelect");

    // Add event listener to the login button
    loginButton.addEventListener("click", function() {
        // Get the selected role
        const selectedRole = roleSelect.value;
        
        // Redirect to the login page based on the selected role
        if (selectedRole === "employee") {
            window.location.href = "employee-login.html";
        } else if (selectedRole === "admin") {
            window.location.href = "admin-login.html";
        }
    });
});
