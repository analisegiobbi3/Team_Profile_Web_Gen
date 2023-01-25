const Engineer = require('../lib/Engineer');

//test one to check if you use the employee file to create a new employee
test ('should return a new engineer object with github and role ', () =>{
    const newEngineer = new Engineer('analisegiobbi3', 'Engineer')

    expect(newEngineer.github && newEngineer.role).toEqual(expect.any(String))
})

test('should return employee github', () => {
    const github = 'analisegiobbi3';
    const newEmployee = new Engineer (github)
    expect (newEmployee.github).toBe(github)
});

test('should return employee role', () => {
    const role = 'Engineer';
    const newEmployee = new Engineer (role)
    expect (newEmployee.role).toBe(role)
});
