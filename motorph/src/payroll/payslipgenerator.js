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
    const grossEarnings = basicSalary;

    // Calculate SSS Contribution
    let sssContribution = 0;
    if (grossEarnings < 3250) {
        sssContribution = 135.00;
    } else if (grossEarnings >= 3250 && grossEarnings <= 9999999) {
        sssContribution = 1125.00;
    } else {
        // Handle other salary ranges if needed
    }

    // Calculate PhilHealth Contribution
    let philhealthContribution = 0;
    if (grossEarnings <= 10000) {
        philhealthContribution = grossEarnings * 0.03;
    } else if (grossEarnings > 10000 && grossEarnings <= 59999.99) {
        philhealthContribution = grossEarnings * 0.03;
    } else if (grossEarnings >= 60000) {
        philhealthContribution = 1800;
    }

    // Calculate Pagibig Contribution
    let pagibigContribution = 0;
    if (grossEarnings >= 1000 && grossEarnings <= 1500) {
        pagibigContribution = grossEarnings * 0.01;
    } else if (grossEarnings > 1500) {
        pagibigContribution = grossEarnings * 0.02;
    }

    // Calculate Withholding Tax
    let withholdingTaxableIncome = grossEarnings - sssContribution - philhealthContribution - pagibigContribution;
    let withholdingTax = 0;

    if (withholdingTaxableIncome <= 20832) {
        withholdingTax = 0;
    } else if (withholdingTaxableIncome <= 33332) {
        withholdingTax = 0.2 * (withholdingTaxableIncome - 20833);
    } else if (withholdingTaxableIncome <= 66666) {
        withholdingTax = 2500 + 0.25 * (withholdingTaxableIncome - 33333);
    } else if (withholdingTaxableIncome <= 166666) {
        withholdingTax = 10833 + 0.3 * (withholdingTaxableIncome - 66667);
    } else if (withholdingTaxableIncome <= 666666) {
        withholdingTax = 40833.33 + 0.32 * (withholdingTaxableIncome - 166667);
    } else if (withholdingTaxableIncome > 666666) {
        withholdingTax = 200833.33 + 0.35 * (withholdingTaxableIncome - 666667);
    }

    // Calculate Gross Allowances
    const grossAllowances = riceSubsidy + phoneAllowance + clothingAllowance;

    // Calculate Gross Deductions
    const grossDeductions = sssContribution + philhealthContribution + pagibigContribution + withholdingTax;

    // Calculate Net Pay
    const netPay = grossEarnings + grossAllowances - grossDeductions;

    // Populate the calculated values
    document.getElementById('grossEarnings').textContent = grossEarnings.toFixed(2);
    document.getElementById('sssDeduction').textContent = sssContribution.toFixed(2);
    document.getElementById('philhealthDeduction').textContent = philhealthContribution.toFixed(2);
    document.getElementById('pagibigDeduction').textContent = pagibigContribution.toFixed(2);
    document.getElementById('withholdingTax').textContent = withholdingTax.toFixed(2);
    document.getElementById('grossDeductions').textContent = grossDeductions.toFixed(2);
    document.getElementById('grossAllowances').textContent = grossAllowances.toFixed(2);
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
