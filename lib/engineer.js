const Common = require('./Common')

class Engineer extends Common {
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    }

    returnGithub(){
        return this.gitHub;
    }

    employeeType(){
        return "Engineer"
    }
}

module.exports = Engineer