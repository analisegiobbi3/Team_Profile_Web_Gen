const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./dist/generateHTML');


const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your name: ',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter your employee ID: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your employee email: ',
    },
    {
        type: 'input',
        name: 'office number',
        message: 'Enter your office number: ',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Enter your Github username: ',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Enter your Github username: ',
    },
    {
        type: 'input',
        name: 'School',
        message: 'Enter your school: ',
    },
    {
        type: 'list',
        name: 'School',
        message: 'Add another team member, or finsh creating your team: ',
        choices: ['Engineer', 'Intern', 'Finish creating your team'],
    },
]
