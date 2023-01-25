const Intern = require('../lib/Intern');

//test one to check if you use the employee file to create a new employee
test ('should return a new employee object with school and role', () =>{
    const newIntern = new Intern('UMass', 'Intern')

    expect(newIntern.school && newIntern.role).toEqual(expect.any(String))

})


test('should return employee school', () => {
    const school = 'UMass';
    const newEmployee = new Intern (school)
    expect (newEmployee.school).toBe(school)
});

test('should return employee role', () => {
    const role = 'Intern';
    const newEmployee = new Intern (role)
    expect (newEmployee.role).toBe(role)
});