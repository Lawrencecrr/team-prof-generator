class Employee {
    constructor(name, id, email, title) {
        this.name = name
        this.id = id
        this.email = email
        this.title = title
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Emplyee";
    }
}

// const text = new Employee("Billy", "110121", "gmail@gmail.com", "CEO")



// console.log(Test)

module.exports = Employee;