// Employee.js (Child Class)

const UserModel = require('./UserModel');

class Employee extends UserModel {
    constructor(employeeId, firstName, lastName, birthday, address, phoneNumber, sss, philhealth, tin, pagibig, status, position, immediateSupervisor) {
        super(employeeId, firstName, lastName, birthday, address, phoneNumber, sss, philhealth, tin, pagibig, status, position, immediateSupervisor);
    }
}

module.exports = Employee;
