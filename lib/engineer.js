const Common = require('./Common')

class Engineer extends Common {
    constructor(name, id, email, GitHub){
        super(name, id, email);
        this.GitHub = GitHub;
    }

    returnGithub(){
        return this.GitHub;
    }

    employeeType(){
        return "Engineer"
    }
}

module.exports = Engineer