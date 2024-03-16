document.addEventListener("DOMContentLoaded", function() {
    const employeeIdSelect = document.getElementById("employeeId");
    const payslipForm = document.getElementById("payslipForm");

    // Function to populate employee data based on selected ID
    function populateEmployeeData(employeeId) {
        fetch('../database/employeedb.csv')
            .then(response => response.text())
            .then(data => {
                const rows = data.split('\n').slice(1); // Skip header row
                const employee = rows.find(row => row.split(',')[0] === employeeId);
                if (employee) {
                    const [_, lastName, firstName, birthday, address, phoneNumber, sssNumber, philhealthNumber, tinNumber, pagibigNumber, status, position, immediateSupervisor, basicSalary, riceSubsidy, phoneAllowance, clothingAllowance] = employee.split(',');
                    document.getElementById("lastName").value = lastName;
                    document.getElementById("firstName").value = firstName;
                    document.getElementById("sssNumber").value = sssNumber;
                    document.getElementById("pagibigNumber").value = pagibigNumber;
                    document.getElementById("philhealthNumber").value = philhealthNumber;
                    document.getElementById("tinNumber").value = tinNumber;
                    document.getElementById("basicSalary").value = basicSalary;
                    document.getElementById("riceSubsidy").value = riceSubsidy;
                    document.getElementById("phoneAllowance").value = phoneAllowance;
                    document.getElementById("clothingAllowance").value = clothingAllowance;
                } else {
                    alert("Employee not found!");
                }
            })
            .catch(error => console.error('Error fetching employee data:', error));
    }

    // Function to calculate total earnings
    function calculateTotalEarnings() {
        const basicSalary = parseFloat(document.getElementById("basicSalary").value);
        const overtimeHours = parseFloat(document.getElementById("overtimeHours").value);
        const riceSubsidy = parseFloat(document.getElementById("riceSubsidy").value);
        const phoneAllowance = parseFloat(document.getElementById("phoneAllowance").value);
        const clothingAllowance = parseFloat(document.getElementById("clothingAllowance").value);

        const overtimePay = overtimeHours * (basicSalary / 8) * 1.5; // Assuming 1.5 times for overtime
        const totalEarnings = basicSalary + overtimePay + riceSubsidy + phoneAllowance + clothingAllowance;

        return totalEarnings;
    }

    // Function to calculate total deductions
    function calculateTotalDeductions() {
        const withholdingTax = parseFloat(document.getElementById("withholdingTax").value);
        const sssDeduction = parseFloat(document.getElementById("sssDeduction").value);
        const philhealthDeduction = parseFloat(document.getElementById("philhealthDeduction").value);
        const pagibigContribution = parseFloat(document.getElementById("pagibigContribution").value);

        const totalDeductions = withholdingTax + sssDeduction + philhealthDeduction + pagibigContribution;

        return totalDeductions;
    }

    // Event listener for Calculate button
    document.getElementById("calculateBtn").addEventListener("click", function() {
        // Calculate total earnings
        const totalEarnings = calculateTotalEarnings();
        document.getElementById("totalEarnings").value = totalEarnings.toFixed(2);

        // Calculate total deductions
        const totalDeductions = calculateTotalDeductions();
        document.getElementById("totalDeductions").value = totalDeductions.toFixed(2);

        // Calculate net pay
        const netPay = totalEarnings - totalDeductions;
        document.getElementById("netPay").value = netPay.toFixed(2);
    });

    // Event listener for Employee ID dropdown change
    employeeIdSelect.addEventListener("change", function() {
        const selectedId = employeeIdSelect.value;
        if (selectedId !== "") {
            populateEmployeeData(selectedId);
            payslipForm.classList.remove("hidden");
        } else {
            payslipForm.classList.add("hidden");
        }
    });

    // Fetch employee IDs and populate the dropdown
    fetch('../database/employeedb.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').slice(1); // Skip header row
            rows.forEach(row => {
                const [employeeId] = row.split(',');
                const option = document.createElement("option");
                option.text = employeeId;
                option.value = employeeId;
                employeeIdSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching employee IDs:', error));
});
