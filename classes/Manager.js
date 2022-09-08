const Employee = require("./Employee")


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "manager")
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber
    }
}

// const test = new Manager("Billy", "110121", "gmail@gmail.com", "05")

// console.log(test)

module.exports = Manager;