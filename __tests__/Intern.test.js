const Intern = require('../lib/Intern');

describe("Intern", () =>{
    describe("Initialization", () => {
        //test one to check if you use the employee file to create a new employee
        it ('should return a new employee object', () =>{
            const newEmployee = new Intern()
            expect(typeof(newEmployee)).toBe("object")

        })

        it('should return employee school', () => {
            const school = 'UMass';
            const newEmployee = new Intern ("Analise", 3, 'analise@gc.com', school)
            expect (newEmployee.getSchool()).toBe(school)
        });

        it('should return employee role', () => {
            const role = 'Intern';
            const newEmployee = new Intern ("Analise", 3, 'analise@gc.com', 'UMass', role)
            expect (newEmployee.getRole()).toBe(role)
        });

    })
})

