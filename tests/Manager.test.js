const Manager = require('../lib/Manager');

//test one to check if you use the employee file to create a new employee
test ('should return a new employee object with office nubmer and role', () =>{
    const newManager = new Manager( 3, 'Manager')

    expect(newManager.officeNum && newManager.role).toEqual(expect.any(String))
})

test('should return employee school', () => {
    const officeNum = 3;
    const newEmployee = new Manager (officeNum)
    expect (newEmployee.officeNum).toBe(officeNum)
});

test('should return employee role', () => {
    const role = 'Manager';
    const newEmployee = new Manager (role)
    expect (newEmployee.role).toBe(role)
});