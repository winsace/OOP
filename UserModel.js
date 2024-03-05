// UserModel.js (Parent Class)

class UserModel {
    constructor(employeeId, firstName, lastName, birthday, address, phoneNumber, sss, philhealth, tin, pagibig, status, position, immediateSupervisor) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.sss = sss;
        this.philhealth = philhealth;
        this.tin = tin;
        this.pagibig = pagibig;
        this.status = status;
        this.position = position;
        this.immediateSupervisor = immediateSupervisor;
    }

    logIn() {
        console.log(`${this.firstName} ${this.lastName} logged in.`);
    }

    logOut() {
        console.log(`${this.firstName} ${this.lastName} logged out.`);
    }

    viewOwnProfile() {
        console.log(`${this.firstName} ${this.lastName} viewed own profile.`);
    }

    viewOwnPayslip() {
        console.log(`${this.firstName} ${this.lastName} viewed own payslip.`);
    }

    punchIn() {
        console.log(`${this.firstName} ${this.lastName} punched in.`);
    }

    punchOut() {
        console.log(`${this.firstName} ${this.lastName} punched out.`);
    }

    requestLeave() {
        console.log(`${this.firstName} ${this.lastName} requested leave.`);
    }

    createTicket() {
        console.log(`${this.firstName} ${this.lastName} created a ticket.`);
    }

    viewTicket() {
        console.log(`${this.firstName} ${this.lastName} viewed a ticket.`);
    }
}

module.exports = UserModel;
