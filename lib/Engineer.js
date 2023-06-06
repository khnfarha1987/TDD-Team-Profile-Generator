// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// In this we write code for Employee to getGithub and getRole.

const Employee = require("./Employee");


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer;

