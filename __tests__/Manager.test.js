const Manager = require('../lib/Manager');

describe("Manager", () =>{
    describe("Initialization", () => {
//test one to check if you use the employee file to create a new employee
        it ('should return a new employee object', () =>{
            const newEmployee = new Manager()
            expect(typeof(newEmployee)).toBe("object")
        })

        it('should return employee school', () => {
            const officeNum = 3;
            const newEmployee = new Manager ("Analise", 3, 'analise@gc.com', officeNum)
            expect (newEmployee.getOfficeNum()).toBe(officeNum)
        });

        it('should return employee role', () => {
            const role = 'Manager';
            const newEmployee = new Manager ("Analise", 3, 'analise@gc.com', 3, role)
            expect (newEmployee.getRole()).toBe(role)
        });

    })
})

