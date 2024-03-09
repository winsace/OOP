// Function to load Employee Management iframe
function loadEmployeeManagement() {
    document.getElementById('mainContent').innerHTML = '<iframe src="employee-management.html" class="w-full h-full border-none"></iframe>';
}

// Function to show welcome message and clock
function showDashboard() {
    document.getElementById('mainContent').innerHTML = '<h2 id="welcomeMessage" class="text-3xl font-bold text-center">Welcome to MotorPH Admin Dashboard</h2><div id="clock" class="text-center mt-4"></div>';
    showClock();
}

// Function to display clock with Philippine time
function showClock() {
    // Get the current date and time
    const now = new Date();

    // Convert to Philippine time (UTC+8)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'Asia/Manila' };
    const formattedDateTime = now.toLocaleString('en-US', options);

    // Display the clock
    document.getElementById('clock').textContent = formattedDateTime;

    // Update clock every second
    setTimeout(showClock, 1000);
}

// Function to confirm logout
function confirmLogout() {
    // Implement your logout logic here
    // For example, you can redirect to index.html
    window.location.href = "index.html";
// Prevent going back to admin dashboard page
    window.history.pushState(null, "", "index.html");
}

// Function to cancel logout
function cancelLogout() {
    // Hide the logout modal
    document.getElementById('logoutModal').classList.add('hidden');
}

// Function to handle logout button click
function logout() {
    // Show the logout modal
    document.getElementById('logoutModal').classList.remove('hidden');
}

// Show welcome message and clock when the page loads
showDashboard();
