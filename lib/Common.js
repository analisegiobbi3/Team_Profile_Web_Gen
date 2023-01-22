class Common {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    returnName(){
        return this.name
    }

    returnID(){
        return this.id
    }

    returnEmail(){
        return this.email
    }

    employeeType(){
        return "Employee"
    }
}



module.export = Common