document.addEventListener('DOMContentLoaded', function () {
    const employeeID = 4; // Specify the employee ID to fetch data for

    // Perform search action to retrieve employee data for employee ID 3
    searchEmployee(employeeID);
});

function searchEmployee(employeeID) {
    fetch(`/employees/${employeeID}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch employee details');
            }
            return response.json();
        })
        .then(data => {
            displayEmployeeData(data);
        })
        .catch(error => console.error('Error fetching employee data:', error));
}

function displayEmployeeData(data) {
    // Populate the form fields with retrieved employee data
    document.getElementById('employeeID').value = data.employeeID;
    document.getElementById('lastName').value = data.lastName;
    document.getElementById('firstName').value = data.firstName;
    document.getElementById('birthday').value = data.birthday;
    document.getElementById('address').value = data.address;
    document.getElementById('phoneNumber').value = data.phoneNumber;
    document.getElementById('sss').value = data.sss;
    document.getElementById('philhealth').value = data.philhealth;
    document.getElementById('tin').value = data.tin;
    document.getElementById('pagibig').value = data.pagibig;
    document.getElementById('status').value = data.status;
    document.getElementById('position').value = data.position;
    document.getElementById('supervisor').value = data.immediateSupervisor;
}
