const Engineer = require('../lib/Engineer');

describe("Engineer", () =>{
    describe("Initialization", () => {
//test one to check if you use the employee file to create a new employee
        it ('should return a new engineer object', () =>{
            const newEmployee = new Engineer()
            expect(typeof(newEmployee)).toBe("object")
        })

        it('should return employee github', () => {
            const GitHub = 'analisegiobbi3';
            const newEmployee = new Engineer ("Analise", 3, 'analise@gc.com', GitHub)
            expect (newEmployee.getGithub()).toBe(GitHub)
        });

        it('should return employee role', () => {
            const role = 'Engineer';
            const newEmployee = new Engineer ("Analise", 3, 'analise@gc.com', 'analisegiobbi3', role)
            expect (newEmployee.getRole()).toBe(role)
        });
    })
})


