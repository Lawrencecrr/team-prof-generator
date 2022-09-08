const Employee = require('../lib/Employee');

describe("Employee", () => {

    describe("getName", () => {
        it("should return a name", () => {
            const name = "Jack";
            const employee = new Employee(name);
            const result = employee.getName(name);
            expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return an id", () => {
            const id = 1;
            const employee = new Employee(this.id);
            const result = employee.getId(this.id);
            expect(result).toEqual(this.id);
        });
    });

    describe("getEmail", () => {
        it("should return an email", () => {
            const email = "jack@mail.com";
            const employee = new Employee(this.email);
            const result = employee.getEmail(this.email);
            expect(result).toEqual(this.email);
        });
    });

    describe("getRole", () => {
        it("should return a role", () => {
            const role = "Employee";
            const employee = new Employee(role);
            const result = employee.getRole(role);
            expect(result).toEqual(role);
        });
    });

});