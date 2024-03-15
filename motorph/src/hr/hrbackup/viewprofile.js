document.addEventListener('DOMContentLoaded', function () {
    const queryParams = new URLSearchParams(window.location.search);
    const employeeID = queryParams.get('employeeID');

    // Fetch employee data based on employeeID
    fetchEmployeeData(employeeID);

    // Event listener for update button
    document.getElementById('updateBtn').addEventListener('click', function () {
        // Implement update functionality
        // Example: send updated data to server
        alert('Update Successful.');
    });

    // Event listener for close button
    document.getElementById('closeBtn').addEventListener('click', function () {
        window.close(); // Close the pop-up window
    });
});

function fetchEmployeeData(employeeID) {
    fetch('../database/employeedb.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            const headers = rows[0].split(',');
            let employeeData = {};

            // Find the row with the matching employee ID
            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');
                const id = values[0].trim(); // Assuming employee ID is in the first column
                if (id === employeeID) {
                    // Populate employeeData object with the employee's information
                    for (let j = 0; j < headers.length; j++) {
                        employeeData[headers[j].trim()] = values[j].trim();
                    }
                    break;
                }
            }

            // Populate form fields with retrieved employee data
            document.getElementById('employeeID').value = employeeData['Employee ID'];
            document.getElementById('lastName').value = employeeData['Last Name'];
            document.getElementById('firstName').value = employeeData['First Name'];
            document.getElementById('birthday').value = employeeData['Birthday'];
            document.getElementById('address').value = employeeData['Address'];
            document.getElementById('phoneNumber').value = employeeData['Phone Number'];
            document.getElementById('sss').value = employeeData['SSS #'];
            document.getElementById('philhealth').value = employeeData['Philhealth #'];
            document.getElementById('tin').value = employeeData['TIN #'];
            document.getElementById('pagibig').value = employeeData['Pag-ibig #'];
            document.getElementById('status').value = employeeData['Status'];
            document.getElementById('position').value = employeeData['Position'];
            document.getElementById('supervisor').value = employeeData['Immediate Supervisor'];
        })
        .catch(error => console.error('Error fetching employee data:', error));
}
