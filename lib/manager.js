const Common = require('./Common')

class Manager extends Common {
    constructor(name, id, email, officeNum){
        super(name, id, email);

        this.officeNum = officeNum;
    }

    returnOfficNum(){
        return this.officeNum
    }
    
    employeeType(){
        return "Manager"
    }
}


module.exports = Manager