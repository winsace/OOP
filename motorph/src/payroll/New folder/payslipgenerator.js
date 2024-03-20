// payslipgenerator.js

// Function to fetch data from employeedb.csv
async function fetchEmployeeData() {
    const response = await fetch('../database/employeedb.csv');
    const data = await response.text();
    return data.split('\n').map(row => row.split(','));
}

// Function to populate employee dropdown
async function populateEmployeeDropdown() {
    const employeeData = await fetchEmployeeData();
    const employeeSelect = document.getElementById('employeeSelect');
    employeeSelect.innerHTML = '';
    for (let i = 1; i < employeeData.length; i++) {
        const option = document.createElement('option');
        option.text = employeeData[i][0];
        option.value = i;
        employeeSelect.add(option);
    }
}

// Function to populate employee details
async function populateEmployeeDetails(employeeIndex) {
    const employeeData = await fetchEmployeeData();
    const [employee] = employeeData.slice(employeeIndex, employeeIndex + 1);
    document.getElementById('lastName').textContent = employee[1];
    document.getElementById('firstName').textContent = employee[2];
    document.getElementById('sssNumber').textContent = employee[6];
    document.getElementById('philhealthNumber').textContent = employee[7];
    document.getElementById('tinNumber').textContent = employee[8];
    document.getElementById('pagibigNumber').textContent = employee[9];
    document.getElementById('basicSalary').textContent = employee[13];
    document.getElementById('riceSubsidy').textContent = employee[14];
    document.getElementById('phoneAllowance').textContent = employee[15];
    document.getElementById('clothingAllowance').textContent = employee[16];
}

// Function to calculate and populate payslip
function calculatePayslip() {
    const basicSalary = parseFloat(document.getElementById('basicSalary').textContent);
    const riceSubsidy = parseFloat(document.getElementById('riceSubsidy').textContent);
    const phoneAllowance = parseFloat(document.getElementById('phoneAllowance').textContent);
    const clothingAllowance = parseFloat(document.getElementById('clothingAllowance').textContent);

    // Calculate Gross Earnings
    const grossEarnings = basicSalary;

    // Calculate Gross Allowances
    const grossAllowances = riceSubsidy + phoneAllowance + clothingAllowance;

    // Calculate Gross Deductions (For now, assuming all deductions are zero)
    const grossDeductions = 0; // Update this according to your logic

    // Calculate Net Pay
    const netPay = grossEarnings + grossAllowances - grossDeductions;

    // Populate the calculated values
    document.getElementById('grossEarnings').textContent = grossEarnings.toFixed(2);
    document.getElementById('grossAllowances').textContent = grossAllowances.toFixed(2);
    document.getElementById('grossDeductions').textContent = grossDeductions.toFixed(2);
    document.getElementById('netPay').textContent = netPay.toFixed(2);
}

// Function to handle button clicks
document.addEventListener('DOMContentLoaded', async () => {
    await populateEmployeeDropdown();

    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', () => {
        calculatePayslip();
    });

    const employeeSelect = document.getElementById('employeeSelect');
    employeeSelect.addEventListener('change', () => {
        const employeeIndex = parseInt(employeeSelect.value);
        populateEmployeeDetails(employeeIndex);
    });
});
