//extended the employee class to include manager info
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNum){
        super(name, id, email);

        this.officeNum = officeNum;
    }

    getOfficeNum(){
        return this.officeNum
    }
    
    getRole(){
        return "Manager"
    }
}


module.exports = Manager