// Sample employee data (Replace with your actual data)
const employeeData = [
    { id: 10001, email: 'winston@motorph.com', name: 'Winston Ace Lao', department: 'IT', position: 'Software Engineer' },
    { id: 10002, email: 'rhona@motorph.com', name: 'Rhona Bansas', department: 'HR', position: 'HR Manager' },
    { id: 10003, email: 'sherilou@motorph.com', name: 'Sherilou Lopez', department: 'Finance', position: 'Accountant' },
    // Add more employee data as needed
];

// Function to show error message
function showError(message) {
    const errorText = document.getElementById('errorText');
    errorText.textContent = message;
    errorText.classList.remove('hidden');
}

// Function to search for employee details
function searchEmployee() {
    const searchType = document.getElementById('searchType').value;
    const searchValue = document.getElementById('searchInput').value.trim().toLowerCase();

    if (searchValue === '') {
        showError('Error: Please enter a search criteria.');
        return;
    }

    const employee = employeeData.find(emp => {
        if (searchType === 'id') {
            return emp.id.toString() === searchValue;
        } else if (searchType === 'email') {
            return emp.email.toLowerCase() === searchValue;
        }
    });

    if (!employee) {
        showError('Error: Employee not found.');
        return;
    }

    // Redirect to employee-details.html with employee ID as a query parameter
    window.location.href = `employee-details.html?id=${employee.id}`;
}

// Event listener for search button click
document.getElementById('searchButton').addEventListener('click', searchEmployee);
