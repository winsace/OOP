// Function to load My Ticket
function viewMyTicket() {
       document.getElementById('mainContent').innerHTML = '<iframe src="myticket.html" class="w-full h-full border-none"></iframe>';
}

// Function to load My Profile
function viewOwnProfile() {
    document.getElementById('mainContent').innerHTML = '<iframe src="myprofile.html" class="w-full h-full border-none"></iframe>';
}


// Function to load My Timesheet
function viewMyTimesheet() {
    document.getElementById('mainContent').innerHTML = '<iframe src="mytimesheet.html" class="w-full h-full border-none"></iframe>';
}

// Function to submit Time Entry
function submitTimeEntry() {
    document.getElementById('mainContent').innerHTML = '<iframe src="../common/timeentry.html" class="w-full h-full border-none"></iframe>';
}


// Function to load my leave request
function viewMyLeaveRequest() {
    document.getElementById('mainContent').innerHTML = '<iframe src="myleave.html" class="w-full h-full border-none"></iframe>';
}


// Function to view My Payslip
function viewMyPayslip() {
    document.getElementById('mainContent').innerHTML = '<iframe src="../common/mypayslip.html" class="w-full h-full border-none"></iframe>';
}


// Function to confirm logout
function confirmLogout() {
    // Implement your logout logic here
    // For example, you can redirect to index.html
    window.location.href = "../index.html";
    // Prevent going back to employee dashboard page
    window.history.pushState(null, "", "../index.html");
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

// Function to toggle submenu visibility
function toggleSubMenu(subMenuId) {
    const subMenu = document.getElementById(subMenuId);
    if (subMenu.classList.contains('active')) {
        subMenu.classList.remove('active');
    } else {
        // Close other submenus
        const allSubMenus = document.querySelectorAll('.nested');
        allSubMenus.forEach(menu => {
            if (menu.id !== subMenuId) {
                menu.classList.remove('active');
            }
        });
        // Open the clicked submenu
        subMenu.classList.add('active');
    }
}

// Show welcome message and clock when the page loads
function showDashboard() {
    document.getElementById('mainContent').innerHTML = '<h2 id="welcomeMessage" class="text-3xl font-bold text-center">Welcome to Employee Dashboard</h2><div id="clock" class="text-center mt-4"></div>';
    showClock();
}

// Function to display clock with local time
function showClock() {
    // Get the current date and time
    const now = new Date();
    // Format the date and time
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedDateTime = now.toLocaleString('en-US', options);
    // Display the clock
    document.getElementById('clock').textContent = formattedDateTime;
    // Update clock every second
    setTimeout(showClock, 1000);
}

// Function to load "ticket.html" for creating service ticket request
function loadTicketManagement() {
    document.getElementById('mainContent').innerHTML = '<iframe src="../common/ticket.html" class="w-full h-full border-none"></iframe>';
}

// Function to load "leave.html" for submitting leave request
function submitLeaveRequest() {
    document.getElementById('mainContent').innerHTML = '<iframe src="../common/leave.html" class="w-full h-full border-none"></iframe>';
}

// Show welcome message and clock when the page loads
showDashboard();
