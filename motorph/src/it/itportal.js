// Function to toggle submenu
function toggleSubMenu(subMenuId) {
    const subMenu = document.getElementById(subMenuId);
    const allSubMenus = document.querySelectorAll('.nested');

    // Collapse all submenus except the one clicked
    allSubMenus.forEach(menu => {
        if (menu !== subMenu && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });

    // Toggle the clicked submenu
    subMenu.classList.toggle('active');
}


// Function to load Ticket Management iframe
function loadTicketManagement() {
    document.getElementById('mainContent').innerHTML = '<iframe src="../common/ticket.html" class="w-full h-full border-none"></iframe>';
}

// Function to load action service request
function actionServiceRequest() {
    document.getElementById('mainContent').innerHTML = '<iframe src="../common/actionticket.html" class="w-full h-full border-none"></iframe>';
}

// Function to view My Payslip
function viewMyPayslip() {
    const payslipFilePath = '../dpa/employee3payslip.docx';
    window.open(payslipFilePath, '_blank');
}

// Function to load User Access Management
function userAccessManagement() {
    document.getElementById('mainContent').innerHTML = '<iframe src="user-management.html" class="w-full h-full border-none"></iframe>';
}

// Function to load my leave request
function viewMyLeaveRequest() {
    document.getElementById('mainContent').innerHTML = '<iframe src="myleave.html" class="w-full h-full border-none"></iframe>';
}


// Function to My Ticket
function viewMyTicket() {
    document.getElementById('mainContent').innerHTML = '<iframe src="myticket.html" class="w-full h-full border-none"></iframe>';
}


// Function to load "leave.html" for submitting leave request
function submitLeaveRequest() {
    document.getElementById('mainContent').innerHTML = '<iframe src="../common/leave.html" class="w-full h-full border-none"></iframe>';
}


// Function to submit Time Entry
function submitTimeEntry() {
    document.getElementById('mainContent').innerHTML = '<iframe src="../common/timeentry.html" class="w-full h-full border-none"></iframe>';
}


// Function to load My Timesheet
function viewMyTimesheet() {
    document.getElementById('mainContent').innerHTML = '<iframe src="mytimesheet.html" class="w-full h-full border-none"></iframe>';
}


// Function to load My Profile
function viewOwnProfile(employeeID) {
    document.getElementById('mainContent').innerHTML = '<iframe src="myprofile.html" class="w-full h-full border-none"></iframe>';
}


// Function to show welcome message and clock
function showDashboard() {
    document.getElementById('mainContent').innerHTML = '<h2 id="welcomeMessage" class="text-3xl font-bold text-center">Welcome to IT Admin Dashboard</h2><div id="clock" class="text-center mt-4"></div>';
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
    window.location.href = "../index.html";
    // Prevent going back to admin dashboard page
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

// Show welcome message and clock when the page loads
showDashboard();
