const Common = require('./Common')

class Intern extends Common{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    returnSchool(){
        return this.school;
    }

    employeeType(){
        return "Intern"
    }
}

module.exports = Intern