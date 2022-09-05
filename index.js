const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./classes/Employee.js')
const Engineer = require('./classes/Engineer.js')
const Intern = require('./classes/Intern.js')
const Manager = require('./classes/Manager.js')
const employeeBucket = []

const init = () => {
    return inquirer.prompt([
        {
            type: input,
            message: "Enter Manager Name",
            name: "managerName"
        },
        {
            type: input,
            message: "Enter Manger Id",
            name: "mangerID"

        },
        {
            type: input,
            message: "Enter Manager email",
            name: "managerEmail"
        },
        {
            type: input,
            message: "Enter Manager Office Number",
            name: "managerOfiiceNumber"
        },
    ]) .then((manager) => {
        console.log(t)
        const {managerName, managerID, managerEmail, managerOfficNumber} = manager
        const manager = new Manager(managerName, managerID, managerEmail, managerOfficNumber)
        employeeBucket.push(manager)
        console.log(employeeBucket)
        anotherEmployee()
    })
}
const anotherEmployee = () => {
    inquirer.prompt([
        {
            type: "choices",
            message: "Would you like to create an engineer or intern or finish your team?",
            Choices: "Finish"
        }
    ])
}
init()