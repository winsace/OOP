// HR.js (Child Class)

const UserModel = require('./UserModel');

class HR extends UserModel {
    constructor(employeeId, firstName, lastName, birthday, address, phoneNumber, sss, philhealth, tin, pagibig, status, position, immediateSupervisor) {
        super(employeeId, firstName, lastName, birthday, address, phoneNumber, sss, philhealth, tin, pagibig, status, position, immediateSupervisor);
    }

    // Additional methods specific to HR
    createEmployee() {
        console.log(`HR created a new employee.`);
    }

    readEmployee() {
        console.log(`HR read employee information.`);
    }

    updateEmployee() {
        console.log(`HR updated employee information.`);
    }

    modifyEmployee() {
        console.log(`HR modified employee data.`);
    }

    approveLeaveRequest() {
        console.log(`HR approved leave request.`);
    }

    rejectLeaveRequest() {
        console.log(`HR rejected leave request.`);
    }

    calculatePayslip() {
        console.log(`HR calculated payslip.`);
    }

    createPayslip() {
        console.log(`HR created payslip.`);
    }
}

module.exports = HR;
