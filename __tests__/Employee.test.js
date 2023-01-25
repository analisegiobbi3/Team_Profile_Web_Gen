const Employee = require('../lib/Employee');

describe("Employee", () =>{
    describe("Initialization", () => {

//test one to check if you use the employee file to create a new employee
        it ('should return a new employee object', () =>{
            const newEmployee = new Employee()
            expect(typeof(newEmployee)).toBe("object")
        })

        it('should return employee name', () => {
            const name = 'Analise';
            const newEmployee = new Employee (name)
            expect (newEmployee.name).toBe(name)
        });

        it('should return employee id', () => {
            const id = 3;
            const newEmployee = new Employee ("Analise", id)
            expect (newEmployee.id).toBe(id)
        })

        it('should return employee email', () => {
            const email = 'analise@gc.com';
            const newEmployee = new Employee ("Analise", 3, email)
            expect (newEmployee.email).toBe(email)
        })
        
    })
})
