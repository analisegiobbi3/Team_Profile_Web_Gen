const { default: test } = require('node:test');
const Employee = require('../lib/Employee');

//test one to check if you use the employee file to create a new employee
test ('should return a new employee object with name, id, and email', () =>{
    const newEmployee = new Employee('Analise', 3, 'analise@gc.com')

    expect(newEmployee.name && newEmployee.email).toEqual(expect.any(String))
    expect(newEmployee.id).toEqual(expect.any(Number))

})

test('should return employee name', () => {
    const name = 'Analise';
    const newEmployee = new Employee (name)
    expect (newEmployee.name).toBe(name)
});

test('should return employee id', () => {
    const id = 3;
    const newEmployee = new Employee (id)
    expect (newEmployee.id).toBe(id)
})

test('should return employee email', () => {
    const email = 'analise@gc.com';
    const newEmployee = new Employee (email)
    expect (newEmployee.email).toBe(email)
})