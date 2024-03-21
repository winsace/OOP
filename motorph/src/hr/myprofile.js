document.addEventListener('DOMContentLoaded', function () {
    const employeeID = 2; // Specify the employee ID to fetch data for

    // Perform search action to retrieve employee data for employee ID 2
    searchEmployee(employeeID);
});

function searchEmployee(employeeID) {
    fetch('../database/employeedb.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            const headers = rows[0].split(',');

            let employeeData = {};
            const idIndex = headers.indexOf('Employee ID');

            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');
                const id = parseInt(values[idIndex].trim()); // Convert ID to integer for comparison
                if (id === employeeID) {
                    for (let j = 0; j < headers.length; j++) {
                        employeeData[headers[j].trim()] = values[j].trim();
                    }
                    break;
                }
            }

            if (Object.keys(employeeData).length === 0) {
                console.error('Error fetching or parsing employee data: Employee not found');
                return;
            }

            displayEmployeeData(employeeData);
        })
        .catch(error => console.error('Error fetching or parsing employee data:', error));
}

function displayEmployeeData(data) {
    // Populate the form fields with retrieved employee data
    document.getElementById('employeeID').value = data['Employee ID'];
    document.getElementById('lastName').value = data['Last Name'];
    document.getElementById('firstName').value = data['First Name'];
    document.getElementById('birthday').value = data['Birthday'];
    document.getElementById('address').value = data['Address'];
    document.getElementById('phoneNumber').value = data['Phone Number'];
    document.getElementById('sss').value = data['SSS #'];
    document.getElementById('philhealth').value = data['Philhealth #'];
    document.getElementById('tin').value = data['TIN #'];
    document.getElementById('pagibig').value = data['Pag-ibig #'];
    document.getElementById('status').value = data['Status'];
    document.getElementById('position').value = data['Position'];
    document.getElementById('supervisor').value = data['Immediate Supervisor'];
}
